import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreatePersonDto {
  @IsNotEmpty()
  nom: string;

  @IsNotEmpty()
  prenom: string;

  @IsNotEmpty()
  sexe: string;

  @IsEmail()
  email?: string;

  @IsString()
  telephone?: string;

  @IsNotEmpty()
  date_naissance: string;
}
