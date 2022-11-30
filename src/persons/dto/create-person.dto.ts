import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreatePersonDto {
  @IsNotEmpty()
  nom: string;

  @IsNotEmpty()
  prenom: string;

  @IsNotEmpty()
  sexe: string;

  @IsEmail()
  email?: string;

  telephone?: string;

  @IsNotEmpty()
  date_naissance: string;
}
