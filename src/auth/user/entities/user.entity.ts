import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { TimesTampEntity } from '../../../times-tamp/times-tamp.entity';

@Entity('users')
export class User extends TimesTampEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  isActive: boolean;
}
