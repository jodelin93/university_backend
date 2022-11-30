import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Person {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  nom: string;

  @Column({ length: 255 })
  prenom: string;

  @Column()
  sexe: string;

  @Column({ length: 255, unique: true, nullable: true })
  email: string;

  @Column({ length: 255, unique: true, nullable: true })
  telephone?: string;

  @Column()
  date_naissance: Date;
}
