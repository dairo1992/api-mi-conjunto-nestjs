import { CompanyUser } from 'src/company-users/entities/company-user.entity';
import { CompanyRole } from 'src/company-roles/entities/company-role.entity';
import { User } from 'src/users/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('user_company_roles')
export class UserCompanyRole {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'bigint', name: 'company_user_id' })
  company_user_id: number;

  @Column({ type: 'bigint', name: 'role_id' })
  role_id: number;

  @Column({ type: 'bigint', name: 'assigned_by_user_id', nullable: true })
  assigned_by_user_id: number;

  @Column({ type: 'timestamp', name: 'assigned_at', default: () => 'CURRENT_TIMESTAMP' })
  assigned_at: Date;

  @Column({ type: 'timestamp', name: 'expires_at', nullable: true })
  expires_at: Date;

  @Column({ type: 'boolean', default: true })
  is_active: boolean;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  created_at: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
  updated_at: Date;

  @ManyToOne(() => CompanyUser, (companyUser) => companyUser.id)
  @JoinColumn({ name: 'company_user_id' })
  companyUser: CompanyUser;

  @ManyToOne(() => CompanyRole, (companyRole) => companyRole.id)
  @JoinColumn({ name: 'role_id' })
  role: CompanyRole;

  @ManyToOne(() => User, (user) => user.id)
  @JoinColumn({ name: 'assigned_by_user_id' })
  assigned_by: User;
}
