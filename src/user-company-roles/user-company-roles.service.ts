import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserCompanyRole } from './entities/user-company-role.entity';
import { CreateUserCompanyRoleDto } from './dto/create-user-company-role.dto';
import { UpdateUserCompanyRoleDto } from './dto/update-user-company-role.dto';

@Injectable()
export class UserCompanyRolesService {
  constructor(
    @InjectRepository(UserCompanyRole)
    private readonly userCompanyRoleRepository: Repository<UserCompanyRole>,
  ) {}

  async create(createUserCompanyRoleDto: CreateUserCompanyRoleDto): Promise<UserCompanyRole> {
    const userCompanyRole = this.userCompanyRoleRepository.create(createUserCompanyRoleDto);
    return this.userCompanyRoleRepository.save(userCompanyRole);
  }

  async findAll(companyId: number): Promise<UserCompanyRole[]> {
    return this.userCompanyRoleRepository.find({ where: { companyUser: { company_id: companyId } } });
  }

  async findOne(companyId: number, id: number): Promise<UserCompanyRole> {
    const userCompanyRole = await this.userCompanyRoleRepository.findOne({ where: { id, companyUser: { company_id: companyId } } });
    if (!userCompanyRole) {
      throw new NotFoundException(`User company role with ID ${id} not found in company ${companyId}`);
    }
    return userCompanyRole;
  }

  async update(companyId: number, id: number, updateUserCompanyRoleDto: UpdateUserCompanyRoleDto): Promise<UserCompanyRole> {
    const userCompanyRole = await this.findOne(companyId, id);
    this.userCompanyRoleRepository.merge(userCompanyRole, updateUserCompanyRoleDto);
    return this.userCompanyRoleRepository.save(userCompanyRole);
  }

  async remove(companyId: number, id: number): Promise<void> {
    await this.findOne(companyId, id);
    await this.userCompanyRoleRepository.delete(id);
  }
}
