import { IsNotEmpty } from "class-validator";

export class CreateAuthDto {

    @IsNotEmpty()
    identifiant: string;
    @IsNotEmpty()
    password: string;
}
