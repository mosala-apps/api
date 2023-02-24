import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Topic } from '../../forum/topic/entities/topic.entity';
import { TimesTampEntity } from '../../times-tamp/times-tamp.entity';

@Entity('categories')
export class Category extends TimesTampEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: number;

  @OneToMany(() => Topic, (topic) => topic.category)
  topics: Array<Topic>;
}
