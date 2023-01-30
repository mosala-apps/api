import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { TimesTampEntity } from '../../../times-tamp/times-tamp.entity';
@Entity('topics')
export class Topic extends TimesTampEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ default: () => false })
  solved: boolean;
}
