import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CompanyRole } from './entities/company-role.entity';
import { CreateCompanyRoleDto } from './dto/create-company-role.dto';
import { UpdateCompanyRoleDto } from './dto/update-company-role.dto';

@Injectable()
export class CompanyRolesService {
  constructor(
    @InjectRepository(CompanyRole)
    private readonly companyRoleRepository: Repository<CompanyRole>,
  ) {}

  async create(createCompanyRoleDto: CreateCompanyRoleDto): Promise<CompanyRole> {
    const companyRole = this.companyRoleRepository.create(createCompanyRoleDto);
    return this.companyRoleRepository.save(companyRole);
  }

  async findAll(companyId: number): Promise<CompanyRole[]> {
    return this.companyRoleRepository.find({ where: { company_id: companyId } });
  }

  async findOne(companyId: number, id: number): Promise<CompanyRole> {
    const companyRole = await this.companyRoleRepository.findOne({ where: { id, company_id: companyId } });
    if (!companyRole) {
      throw new NotFoundException(`Company role with ID ${id} not found in company ${companyId}`);
    }
    return companyRole;
  }

  async update(companyId: number, id: number, updateCompanyRoleDto: UpdateCompanyRoleDto): Promise<CompanyRole> {
    const companyRole = await this.findOne(companyId, id);
    this.companyRoleRepository.merge(companyRole, updateCompanyRoleDto);
    return this.companyRoleRepository.save(companyRole);
  }

  async remove(companyId: number, id: number): Promise<void> {
    await this.findOne(companyId, id);
    await this.companyRoleRepository.delete(id);
  }
}
