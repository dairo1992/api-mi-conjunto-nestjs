import { Test, TestingModule } from '@nestjs/testing';
import { UserCompanyRolesController } from './user-company-roles.controller';

describe('UserCompanyRolesController', () => {
  let controller: UserCompanyRolesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserCompanyRolesController],
    }).compile();

    controller = module.get<UserCompanyRolesController>(UserCompanyRolesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
