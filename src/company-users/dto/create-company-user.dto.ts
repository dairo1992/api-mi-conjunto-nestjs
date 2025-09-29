import { IsString, IsNotEmpty, IsOptional, IsNumber, IsBoolean, IsDate } from 'class-validator';

export class CreateCompanyUserDto {
  @IsNumber()
  @IsNotEmpty()
  company_id: number;

  @IsNumber()
  @IsNotEmpty()
  user_id: number;

  @IsString()
  @IsOptional()
  employee_id?: string;

  @IsDate()
  @IsOptional()
  hire_date?: Date;

  @IsDate()
  @IsOptional()
  termination_date?: Date;

  @IsBoolean()
  @IsOptional()
  is_internal?: boolean;

  @IsBoolean()
  @IsOptional()
  is_active?: boolean;
}
