import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CompanyUser } from './entities/company-user.entity';
import { CreateCompanyUserDto } from './dto/create-company-user.dto';
import { UpdateCompanyUserDto } from './dto/update-company-user.dto';

@Injectable()
export class CompanyUsersService {
  constructor(
    @InjectRepository(CompanyUser)
    private readonly companyUserRepository: Repository<CompanyUser>,
  ) {}

  async create(createCompanyUserDto: CreateCompanyUserDto): Promise<CompanyUser> {
    const companyUser = this.companyUserRepository.create(createCompanyUserDto);
    return this.companyUserRepository.save(companyUser);
  }

  async findAll(companyId: number): Promise<CompanyUser[]> {
    return this.companyUserRepository.find({ where: { company_id: companyId } });
  }

  async findOne(companyId: number, id: number): Promise<CompanyUser> {
    const companyUser = await this.companyUserRepository.findOne({ where: { id, company_id: companyId } });
    if (!companyUser) {
      throw new NotFoundException(`Company user with ID ${id} not found in company ${companyId}`);
    }
    return companyUser;
  }

  async update(companyId: number, id: number, updateCompanyUserDto: UpdateCompanyUserDto): Promise<CompanyUser> {
    const companyUser = await this.findOne(companyId, id);
    this.companyUserRepository.merge(companyUser, updateCompanyUserDto);
    return this.companyUserRepository.save(companyUser);
  }

  async remove(companyId: number, id: number): Promise<void> {
    await this.findOne(companyId, id);
    await this.companyUserRepository.delete(id);
  }
}
