import { Controller, Post, Body, Param, Get, Patch, Delete } from '@nestjs/common';
import { BranchesService } from './branches.service';
import { CreateBranchDto } from './dto/create-branch.dto';
import { UpdateBranchDto } from './dto/update-branch.dto';

@Controller('companies/:companyId/branches')
export class BranchesController {
  constructor(private readonly branchesService: BranchesService) {}

  @Post()
  create(@Param('companyId') companyId: string, @Body() createBranchDto: CreateBranchDto) {
    return this.branchesService.create({ ...createBranchDto, company_id: +companyId });
  }

  @Get()
  findAll(@Param('companyId') companyId: string) {
    return this.branchesService.findAll(+companyId);
  }

  @Get(':id')
  findOne(@Param('companyId') companyId: string, @Param('id') id: string) {
    return this.branchesService.findOne(+companyId, +id);
  }

  @Patch(':id')
  update(@Param('companyId') companyId: string, @Param('id') id: string, @Body() updateBranchDto: UpdateBranchDto) {
    return this.branchesService.update(+companyId, +id, updateBranchDto);
  }

  @Delete(':id')
  remove(@Param('companyId') companyId: string, @Param('id') id: string) {
    return this.branchesService.remove(+companyId, +id);
  }
}
