import { CreatePersonDto } from 'src/persons/dto/create-person.dto';
export declare class CreateEmployeeDto extends CreatePersonDto {
    fonction: string;
    date_embauche: string;
    salaire?: number;
}
