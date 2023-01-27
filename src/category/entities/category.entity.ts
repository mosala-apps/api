import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { TimesTampEntity } from '../../times-tamp/times-tamp.entity';

@Entity('categories')
export class Category extends TimesTampEntity{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: number;
}
