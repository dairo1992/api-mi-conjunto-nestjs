import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompanyRole } from './entities/company-role.entity';
import { CompanyRolesService } from './company-roles.service';
import { CompanyRolesController } from './company-roles.controller';

@Module({
  imports: [TypeOrmModule.forFeature([CompanyRole])],
  providers: [CompanyRolesService],
  controllers: [CompanyRolesController]
})
export class CompanyRolesModule {}

