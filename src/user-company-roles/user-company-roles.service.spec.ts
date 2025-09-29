import { Test, TestingModule } from '@nestjs/testing';
import { UserCompanyRolesService } from './user-company-roles.service';

describe('UserCompanyRolesService', () => {
  let service: UserCompanyRolesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserCompanyRolesService],
    }).compile();

    service = module.get<UserCompanyRolesService>(UserCompanyRolesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
