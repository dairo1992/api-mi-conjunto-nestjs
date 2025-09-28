import {
  Injectable,
  UnauthorizedException,
  ConflictException,
} from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { ValidationMessages } from '../common/validation-messages';
import { User } from '../users/entities/user.entity';
import { UserToken, TokenType } from './entities/user-token.entity';
import { ConfigService } from '@nestjs/config';
import { DataSource, EntityManager } from 'typeorm';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    private configService: ConfigService,
    private dataSource: DataSource,
  ) {}

  private async _generateAndSaveToken(
    user: User,
    manager: EntityManager,
  ): Promise<string> {
    const payload = { email: user.email, sub: user.uuid }; // Use UUID in JWT payload
    const token = this.jwtService.sign(payload);
    const expiresIn = this.configService.get<string>('JWT_EXPIRATION', '1h');

    // Calcula la fecha de expiración
    const expiresAt = new Date();
    const unit = expiresIn.slice(-1);
    const value = parseInt(expiresIn.slice(0, -1), 10);
    if (unit === 's') expiresAt.setSeconds(expiresAt.getSeconds() + value);
    if (unit === 'h') expiresAt.setHours(expiresAt.getHours() + value);
    if (unit === 'd') expiresAt.setDate(expiresAt.getDate() + value);

    const tokenHash = token; // En una aplicación real, deberías hashear el token

    const userToken = manager.create(UserToken, {
      userId: user.id,
      tokenType: TokenType.ACCESS,
      tokenHash: tokenHash,
      expiresAt: expiresAt,
    });

    await manager.save(userToken);

    return token;
  }

  async validateUser(email: string, pass: string): Promise<User | null> {
    const user = await this.usersService.findOneByEmail(email);
    if (user && (await bcrypt.compare(pass, user.password))) {
      return user;
    }
    return null;
  }

  async login(loginDto: LoginDto) {
    const user = await this.validateUser(loginDto.email, loginDto.password);
    if (!user) {
      throw new UnauthorizedException(ValidationMessages.INVALID_CREDENTIALS);
    }

    const accessToken = await this._generateAndSaveToken(
      user,
      this.dataSource.manager,
    );

    return {
      access_token: accessToken,
      message: ValidationMessages.LOGIN_SUCCESS,
      user: {
        uuid: user.uuid,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
      },
    };
  }

  async register(registerDto: RegisterDto) {
    const existingUser = await this.usersService.findOneByEmail(
      registerDto.email,
    );
    if (existingUser) {
      throw new ConflictException(ValidationMessages.EMAIL_ALREADY_EXISTS);
    }

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(registerDto.password, salt);

    const result = await this.dataSource.transaction(async (manager) => {
      const newUser = manager.create(User, {
        email: registerDto.email,
        password: hashedPassword,
        firstName: registerDto.firstName,
        lastName: registerDto.lastName,
      });
      await manager.save(newUser);

      const accessToken = await this._generateAndSaveToken(newUser, manager);

      return {
        accessToken,
        user: newUser,
      };
    });

    return {
      access_token: result.accessToken,
      message: ValidationMessages.REGISTER_SUCCESS,
      user: {
        uuid: result.user.uuid,
        email: result.user.email,
        firstName: result.user.firstName,
        lastName: result.user.lastName,
      },
    };
  }
}
