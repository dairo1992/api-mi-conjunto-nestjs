import { IsString, IsNotEmpty, IsOptional, IsNumber, IsBoolean } from 'class-validator';

export class CreateCompanyRoleDto {
  @IsNumber()
  @IsNotEmpty()
  company_id: number;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsBoolean()
  @IsOptional()
  is_system_role?: boolean;

  @IsBoolean()
  @IsOptional()
  is_active?: boolean;
}
