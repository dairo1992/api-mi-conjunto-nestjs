import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';
import { ValidationMessages } from '../../common/validation-messages';

export class LoginDto {
  @IsEmail({}, { message: ValidationMessages.EMAIL_INVALID })
  @IsNotEmpty({ message: ValidationMessages.EMAIL_REQUIRED })
  email: string;

  @IsString({ message: ValidationMessages.INVALID_FORMAT })
  @IsNotEmpty({ message: ValidationMessages.PASSWORD_REQUIRED })
  @MinLength(6, { message: 'La contraseña debe tener al menos 6 caracteres' })
  password: string;
}
