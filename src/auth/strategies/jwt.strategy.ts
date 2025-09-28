import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';
import { UsersService } from '../../users/users.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly configService: ConfigService,
    private readonly usersService: UsersService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey:
        configService.get<string>('JWT_SECRET') || 'default-secret-key',
    });
  }

  async validate(payload: { sub: number; email: string }) {
    // The payload is the decoded JWT.
    // We can use the user ID (`sub`) to fetch the full user object.
    const user = await this.usersService.findOneById(payload.sub);
    // Passport will attach this user object to the request object.
    return user;
  }
}
