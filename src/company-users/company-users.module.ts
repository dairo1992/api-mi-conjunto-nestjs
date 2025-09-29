import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompanyUser } from './entities/company-user.entity';
import { CompanyUsersService } from './company-users.service';
import { CompanyUsersController } from './company-users.controller';

@Module({
  imports: [TypeOrmModule.forFeature([CompanyUser])],
  providers: [CompanyUsersService],
  controllers: [CompanyUsersController]
})
export class CompanyUsersModule {}

