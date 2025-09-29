import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserCompanyRole } from './entities/user-company-role.entity';
import { UserCompanyRolesService } from './user-company-roles.service';
import { UserCompanyRolesController } from './user-company-roles.controller';

@Module({
  imports: [TypeOrmModule.forFeature([UserCompanyRole])],
  providers: [UserCompanyRolesService],
  controllers: [UserCompanyRolesController]
})
export class UserCompanyRolesModule {}

