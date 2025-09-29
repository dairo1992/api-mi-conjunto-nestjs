import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Branch } from './entities/branch.entity';
import { CreateBranchDto } from './dto/create-branch.dto';
import { UpdateBranchDto } from './dto/update-branch.dto';

@Injectable()
export class BranchesService {
  constructor(
    @InjectRepository(Branch)
    private readonly branchRepository: Repository<Branch>,
  ) {}

  async create(createBranchDto: CreateBranchDto): Promise<Branch> {
    const branch = this.branchRepository.create(createBranchDto);
    return this.branchRepository.save(branch);
  }

  async findAll(companyId: number): Promise<Branch[]> {
    return this.branchRepository.find({ where: { company_id: companyId } });
  }

  async findOne(companyId: number, id: number): Promise<Branch> {
    const branch = await this.branchRepository.findOne({ where: { id, company_id: companyId } });
    if (!branch) {
      throw new NotFoundException(`Branch with ID ${id} not found in company ${companyId}`);
    }
    return branch;
  }

  async update(companyId: number, id: number, updateBranchDto: UpdateBranchDto): Promise<Branch> {
    const branch = await this.findOne(companyId, id);
    this.branchRepository.merge(branch, updateBranchDto);
    return this.branchRepository.save(branch);
  }

  async remove(companyId: number, id: number): Promise<void> {
    await this.findOne(companyId, id);
    await this.branchRepository.delete(id);
  }
}
