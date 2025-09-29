import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserCompanyRolesService } from './user-company-roles.service';
import { CreateUserCompanyRoleDto } from './dto/create-user-company-role.dto';
import { UpdateUserCompanyRoleDto } from './dto/update-user-company-role.dto';

@Controller('companies/:companyId/user-roles')
export class UserCompanyRolesController {
  constructor(private readonly userCompanyRolesService: UserCompanyRolesService) {}

  @Post()
  create(@Param('companyId') companyId: string, @Body() createUserCompanyRoleDto: CreateUserCompanyRoleDto) {
    return this.userCompanyRolesService.create(createUserCompanyRoleDto);
  }

  @Get()
  findAll(@Param('companyId') companyId: string) {
    return this.userCompanyRolesService.findAll(+companyId);
  }

  @Get(':id')
  findOne(@Param('companyId') companyId: string, @Param('id') id: string) {
    return this.userCompanyRolesService.findOne(+companyId, +id);
  }

  @Patch(':id')
  update(@Param('companyId') companyId: string, @Param('id') id: string, @Body() updateUserCompanyRoleDto: UpdateUserCompanyRoleDto) {
    return this.userCompanyRolesService.update(+companyId, +id, updateUserCompanyRoleDto);
  }

  @Delete(':id')
  remove(@Param('companyId') companyId: string, @Param('id') id: string) {
    return this.userCompanyRolesService.remove(+companyId, +id);
  }
}
