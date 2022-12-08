import { Person } from "src/persons/entities/person.entity";
export declare class Student {
    id: number;
    code: string;
    lieu_naissance: string;
    groupe_sanguin: string;
    statut_matrimonial: string;
    cin: string;
    nif: string;
    createdAt: Date;
    updatedAt: Date;
    personId: number;
    person: Person;
}
