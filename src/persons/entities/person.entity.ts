import { Employee } from './../../employees/entities/employee.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export enum Sexe {
  MASCULIN = 'masculin',
  FEMININ = 'feminin',
  AUTRES = 'autres',
}

@Entity()
export class Person {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  nom: string;

  @Column({ length: 255 })
  prenom: string;

  @Column({ type: 'enum', enum: Sexe, default: Sexe.MASCULIN })
  sexe: string;

  @Column({ length: 255, unique: true, nullable: true })
  email: string;

  @Column({ length: 255, unique: true, nullable: true })
  telephone?: string;

  @Column()
  date_naissance: Date;

  @CreateDateColumn({ type: 'timestamp', default: () => '(CURRENT_DATE)' })
  createdAt: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => '(CURRENT_DATE)',
    nullable: true,
  })
  updatedAt: Date;
  @OneToOne(() => Employee, (employee) => employee.person,{cascade:['remove','insert','update']})
  employee: Employee;
}
