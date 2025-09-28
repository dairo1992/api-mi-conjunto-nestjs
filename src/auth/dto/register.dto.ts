import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';
import { ValidationMessages } from '../../common/validation-messages';

export class RegisterDto {
  @IsString({ message: ValidationMessages.INVALID_FORMAT })
  @IsNotEmpty({ message: ValidationMessages.FIRST_NAME_REQUIRED })
  firstName: string;

  @IsString({ message: ValidationMessages.INVALID_FORMAT })
  @IsNotEmpty({ message: ValidationMessages.LAST_NAME_REQUIRED })
  lastName: string;

  @IsEmail({}, { message: ValidationMessages.EMAIL_INVALID })
  @IsNotEmpty({ message: ValidationMessages.EMAIL_REQUIRED })
  email: string;

  @IsString({ message: ValidationMessages.INVALID_FORMAT })
  @IsNotEmpty({ message: ValidationMessages.PASSWORD_REQUIRED })
  @MinLength(8, { message: ValidationMessages.PASSWORD_TOO_SHORT })
  password: string;
}
