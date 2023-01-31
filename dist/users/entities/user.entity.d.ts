import { Person } from 'src/persons/entities/person.entity';
import { Roles } from './roles.entity';
export declare class User {
    constructor(partial: Partial<User>);
    id: number;
    username: string;
    password: string;
    isActive: boolean;
    personId: number;
    createdAt: Date;
    updatedAt: Date;
    person: Person;
    role: Roles;
}
