import { Person } from "src/persons/entities/person.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Student {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable:true})
    code: string;

    @Column()
    lieu_naissance: string;

    @Column({nullable:true})
    groupe_sanguin: string;

    @Column()
    statut_matrimonial: string;

    @Column({nullable:true})
    cin: string;

    @Column({nullable:true})
    nif: string;

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
