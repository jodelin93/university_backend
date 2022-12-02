import { Person } from 'src/persons/entities/person.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
@Entity()
export class Employee {
  @PrimaryGeneratedColumn() id: number;

  @Column({ length: 255 })
  fonction: string;
  @Column()
  date_embauche: Date;

  @Column()
  personId: number;

  @OneToOne(() => Person, (person) => person.employee)
  @JoinColumn()
  person: Person;
}
