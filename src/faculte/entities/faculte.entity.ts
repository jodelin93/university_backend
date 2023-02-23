import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

enum DEGREE {
    LICENCE,MAITRISE,DOCTORAT,CERTIFICAT,DIPLOME
}

@Entity()
export class Faculte {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nom_faculte: string;

  @Column()
  degree: string;

  @Column({ default: 4 })
  duree: number;
    
  @Column({type:"text",nullable:true })
  description: string;

  @Column({nullable:true})
  note_de_passage: number;

  @Column({nullable:true})
  nombre_matiere: number;

 @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  
}
