import { User } from './user.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Roles {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique:true})
    role_name: string;

    @OneToMany(()=>User, user=>user.role)
    user: User;
}