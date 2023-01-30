import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from '../../auth/user/entities/user.entity';

@Entity('talents')
export class Talent {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  experience?: string;

  @Column()
  level?: string;

  @Column()
  education?: string;

  @Column()
  githubLink?: string;

  @Column()
  websiteLink?: string;

  @Column()
  location?: string;

  @Column()
  phone?: string;

  @OneToOne(() => User)
  @JoinColumn()
  user: User;
}
