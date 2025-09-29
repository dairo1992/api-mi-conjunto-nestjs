import { Company } from 'src/companies/entities/company.entity';
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

@Entity('company_users')
export class CompanyUser {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'bigint', name: 'company_id' })
  company_id: number;

  @Column({ type: 'bigint', name: 'user_id' })
  user_id: number;

  @Column({ type: 'varchar', length: 50, nullable: true, name: 'employee_id' })
  employee_id: string;

  @Column({ type: 'date', nullable: true, name: 'hire_date' })
  hire_date: Date;

  @Column({ type: 'date', nullable: true, name: 'termination_date' })
  termination_date: Date;

  @Column({ type: 'boolean', default: false, name: 'is_internal' })
  is_internal: boolean;

  @Column({ type: 'boolean', default: true })
  is_active: boolean;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  created_at: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
  updated_at: Date;

  @ManyToOne(() => Company, (company) => company.id)
  @JoinColumn({ name: 'company_id' })
  company: Company;

  @ManyToOne(() => User, (user) => user.id)
  @JoinColumn({ name: 'user_id' })
  user: User;
}
