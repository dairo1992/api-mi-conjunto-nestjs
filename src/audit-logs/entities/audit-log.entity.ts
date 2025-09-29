import { Company } from 'src/companies/entities/company.entity';
import { User } from 'src/users/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('audit_logs')
export class AuditLog {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'bigint', name: 'user_id', nullable: true })
  user_id: number;

  @Column({ type: 'bigint', name: 'company_id', nullable: true })
  company_id: number;

  @Column({ type: 'varchar', length: 100 })
  action: string;

  @Column({ type: 'varchar', length: 100, name: 'resource_type', nullable: true })
  resource_type: string;

  @Column({ type: 'bigint', name: 'resource_id', nullable: true })
  resource_id: number;

  @Column({ type: 'json', name: 'old_values', nullable: true })
  old_values: any;

  @Column({ type: 'json', name: 'new_values', nullable: true })
  new_values: any;

  @Column({ type: 'varchar', length: 45, name: 'ip_address', nullable: true })
  ip_address: string;

  @Column({ type: 'text', name: 'user_agent', nullable: true })
  user_agent: string;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  created_at: Date;

  @ManyToOne(() => User, (user) => user.id)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => Company, (company) => company.id)
  @JoinColumn({ name: 'company_id' })
  company: Company;
}
