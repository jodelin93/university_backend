import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Student } from "./student.entity";

@Entity()
export class StudentInformationsCompementaires{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true })
    ocupation: string;

    @Column({ nullable: true })
    personne_resp: string;

    @Column({ nullable: true })
    telephone_resp: string;

    @Column({ nullable: true })
    maladie: string;

    @Column({ nullable: true })
    personne_contact: string;

    @Column({ nullable: true })
    annee_fin_etude: string;

    @Column({ nullable: true })
    nom_etablissemet: string;

    @Column({ nullable: true })
    etude_precedente: string;

    @Column({ nullable: true })
    option_precendente: string;

    @Column({ nullable: true })
    annee_etude_precedente: string

    @Column()
    studentId: number;

    @OneToOne(() => Student,student=>student.studentinfos,{onDelete:'CASCADE'})
    @JoinColumn()
    student: Student;

}