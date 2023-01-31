import { CreatePersonDto } from "src/persons/dto/create-person.dto";
export declare class CreateStudentDto extends CreatePersonDto {
    lieu_naissance: string;
    groupe_sanguin: string;
    statut_matrimonial: string;
    cin?: string;
    nif?: string;
}
