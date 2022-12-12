import { Exclude } from "class-transformer";
import { Person } from "src/persons/entities/person.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Roles } from "./roles.entity";

@Entity()
export class User {
    constructor(partial: Partial<User>) {
        Object.assign(this, partial);
      }
    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique:true})
    username: string;

    @Column()
    @Exclude()
    password: string;

    @Column({default:0})
    isActive: boolean;

    @Column()
    personId: number;

    @OneToOne(() => Person)
    @JoinColumn()
    person: Person;

    @ManyToOne(() => Roles, roles=>roles.user,{cascade:true})
    @JoinColumn()
    role: Roles;
 }
