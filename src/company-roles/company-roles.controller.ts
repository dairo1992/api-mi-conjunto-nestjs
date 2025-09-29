import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CompanyRolesService } from './company-roles.service';
import { CreateCompanyRoleDto } from './dto/create-company-role.dto';
import { UpdateCompanyRoleDto } from './dto/update-company-role.dto';

@Controller('companies/:companyId/roles')
export class CompanyRolesController {
  constructor(private readonly companyRolesService: CompanyRolesService) {}

  @Post()
  create(@Param('companyId') companyId: string, @Body() createCompanyRoleDto: CreateCompanyRoleDto) {
    return this.companyRolesService.create({ ...createCompanyRoleDto, company_id: +companyId });
  }

  @Get()
  findAll(@Param('companyId') companyId: string) {
    return this.companyRolesService.findAll(+companyId);
  }

  @Get(':id')
  findOne(@Param('companyId') companyId: string, @Param('id') id: string) {
    return this.companyRolesService.findOne(+companyId, +id);
  }

  @Patch(':id')
  update(@Param('companyId') companyId: string, @Param('id') id: string, @Body() updateCompanyRoleDto: UpdateCompanyRoleDto) {
    return this.companyRolesService.update(+companyId, +id, updateCompanyRoleDto);
  }

  @Delete(':id')
  remove(@Param('companyId') companyId: string, @Param('id') id: string) {
    return this.companyRolesService.remove(+companyId, +id);
  }
}
