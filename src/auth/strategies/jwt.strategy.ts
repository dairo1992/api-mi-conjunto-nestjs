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
    // El payload es el JWT decodificado.
    // Podemos usar el ID del usuario (`sub`) para obtener el objeto usuario completo.
    const user = await this.usersService.findOneById(payload.sub);
    // Passport adjuntará este objeto usuario al objeto request.
    return user;
  }
}
