import { Person } from "src/persons/entities/person.entity";
import { StudentInformationsCompementaires } from "./student.infos.entity";
export declare class Student {
    id: number;
    code: string;
    lieu_naissance: string;
    groupe_sanguin: string;
    statut_matrimonial: string;
    cin: string;
    nif: string;
    isValidate: boolean;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
    personId: number;
    person: Person;
    studentinfos: StudentInformationsCompementaires;
}
