import { IsString, IsNotEmpty, IsOptional, IsEmail, IsUrl, IsNumber, IsBoolean, IsDate } from 'class-validator';

export class CreateCompanyDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsOptional()
  legal_name?: string;

  @IsString()
  @IsOptional()
  tax_id?: string;

  @IsEmail()
  @IsOptional()
  email?: string;

  @IsString()
  @IsOptional()
  phone?: string;

  @IsUrl()
  @IsOptional()
  website?: string;

  @IsUrl()
  @IsOptional()
  logo_url?: string;

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
  subscription_plan_id?: number;

  @IsNumber()
  @IsNotEmpty()
  owner_user_id: number;

  @IsBoolean()
  @IsOptional()
  is_active?: boolean;

  @IsDate()
  @IsOptional()
  subscription_starts_at?: Date;

  @IsDate()
  @IsOptional()
  subscription_ends_at?: Date;

  @IsDate()
  @IsOptional()
  trial_ends_at?: Date;
}
