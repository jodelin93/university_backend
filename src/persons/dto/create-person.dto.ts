import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
export class CreatePersonDto {
  @IsNotEmpty()
  @ApiProperty({
    description: 'nom de la personne ',
  })
  nom: string;

  @IsNotEmpty()
  @ApiProperty({
    description: 'prenom de la personne ',
  })
  prenom: string;

  @IsNotEmpty()
  @ApiProperty({
    description: 'sexe de la personne doit masculin ou feminin ou autres ',
    default: 'masculin',
  })
  sexe: string;

  @IsEmail()
  @ApiPropertyOptional({
    description: 'email de la personne ',
  })
  email?: string;

  @IsString()
  @ApiPropertyOptional({
    description: 'telephone de la personne ',
  })
  telephone?: string;

  @IsNotEmpty()
  @ApiProperty({
    description: 'date_naissance de la personne format yyyy-mm-dd ',
    type:Date
  })
  date_naissance: string;
}
