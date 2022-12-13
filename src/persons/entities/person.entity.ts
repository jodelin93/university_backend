import { Employee } from './../../employees/entities/employee.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  Generated,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Student } from 'src/students/entities/student.entity';

export enum Sexe {
  MASCULIN = 'masculin',
  FEMININ = 'feminin',
  AUTRES = 'autres',
}

@Entity()
export class Person {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({unique:true})
  @Generated("uuid")
  uuid: string;

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

  @Column("date")
  date_naissance: Date;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
  // @OneToOne(() => Employee, (employee) => employee.person,{cascade:['remove','insert','update']})
  // employee: Employee;

  // @OneToOne(() => Student, (student) => student.person,{cascade:['remove','insert','update']})
  // student: Student;
}
