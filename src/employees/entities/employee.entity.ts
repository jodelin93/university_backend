import { Person } from 'src/persons/entities/person.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
@Entity()
export class Employee {
  @PrimaryGeneratedColumn() id: number;

  @Column({ length: 255 })
  fonction: string;
  @Column()
  date_embauche: Date;

  @Column('double', { nullable: true })
  salaire: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column()
  personId: number;

  @OneToOne(() => Person)
  @JoinColumn()
  person: Person;
}
