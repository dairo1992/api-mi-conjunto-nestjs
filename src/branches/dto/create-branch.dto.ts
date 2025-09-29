import { IsString, IsNotEmpty, IsOptional, IsEmail, IsNumber, IsBoolean } from 'class-validator';

export class CreateBranchDto {
  @IsNumber()
  @IsNotEmpty()
  company_id: number;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsOptional()
  code?: string;

  @IsEmail()
  @IsOptional()
  email?: string;

  @IsString()
  @IsOptional()
  phone?: string;

  @IsString()
  @IsOptional()
  address?: string;

  @IsString()
  @IsOptional()
  city?: string;

  @IsString()
  @IsOptional()
  state?: string;

  @IsString()
  @IsOptional()
  country?: string;

  @IsString()
  @IsOptional()
  postal_code?: string;

  @IsString()
  @IsOptional()
  timezone?: string;

  @IsNumber()
  @IsOptional()
  manager_user_id?: number;

  @IsBoolean()
  @IsOptional()
  is_active?: boolean;
}
