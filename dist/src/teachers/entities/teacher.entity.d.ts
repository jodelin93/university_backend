import { Person } from 'src/persons/entities/person.entity';
export declare enum Niveau {
    LICENCE = "licence",
    MAITRISE = "maitrise",
    DOCTORAT = "doctorat"
}
export declare class Teacher {
    id: number;
    niveau: string;
    personId: number;
    person: Person;
}
