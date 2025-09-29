import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CompanyUsersService } from './company-users.service';
import { CreateCompanyUserDto } from './dto/create-company-user.dto';
import { UpdateCompanyUserDto } from './dto/update-company-user.dto';

@Controller('companies/:companyId/users')
export class CompanyUsersController {
  constructor(private readonly companyUsersService: CompanyUsersService) {}

  @Post()
  create(@Param('companyId') companyId: string, @Body() createCompanyUserDto: CreateCompanyUserDto) {
    return this.companyUsersService.create({ ...createCompanyUserDto, company_id: +companyId });
  }

  @Get()
  findAll(@Param('companyId') companyId: string) {
    return this.companyUsersService.findAll(+companyId);
  }

  @Get(':id')
  findOne(@Param('companyId') companyId: string, @Param('id') id: string) {
    return this.companyUsersService.findOne(+companyId, +id);
  }

  @Patch(':id')
  update(@Param('companyId') companyId: string, @Param('id') id: string, @Body() updateCompanyUserDto: UpdateCompanyUserDto) {
    return this.companyUsersService.update(+companyId, +id, updateCompanyUserDto);
  }

  @Delete(':id')
  remove(@Param('companyId') companyId: string, @Param('id') id: string) {
    return this.companyUsersService.remove(+companyId, +id);
  }
}
