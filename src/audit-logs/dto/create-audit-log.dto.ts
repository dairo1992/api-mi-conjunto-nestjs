import { IsString, IsNotEmpty, IsOptional, IsNumber, IsObject } from 'class-validator';

export class CreateAuditLogDto {
  @IsNumber()
  @IsOptional()
  user_id?: number;

  @IsNumber()
  @IsOptional()
  company_id?: number;

  @IsString()
  @IsNotEmpty()
  action: string;

  @IsString()
  @IsOptional()
  resource_type?: string;

  @IsNumber()
  @IsOptional()
  resource_id?: number;

  @IsObject()
  @IsOptional()
  old_values?: any;

  @IsObject()
  @IsOptional()
  new_values?: any;

  @IsString()
  @IsOptional()
  ip_address?: string;

  @IsString()
  @IsOptional()
  user_agent?: string;
}
