import { IsNumber, IsNotEmpty, IsOptional, IsDate, IsBoolean } from 'class-validator';

export class CreateUserCompanyRoleDto {
  @IsNumber()
  @IsNotEmpty()
  company_user_id: number;

  @IsNumber()
  @IsNotEmpty()
  role_id: number;

  @IsNumber()
  @IsOptional()
  assigned_by_user_id?: number;

  @IsDate()
  @IsOptional()
  assigned_at?: Date;

  @IsDate()
  @IsOptional()
  expires_at?: Date;

  @IsBoolean()
  @IsOptional()
  is_active?: boolean;
}
