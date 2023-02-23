import { ApiProperty } from "@nestjs/swagger";
import { IsAlphanumeric, IsNotEmpty, IsOptional, IsPositive } from "class-validator";

export class CreateFaculteDto {

    @IsNotEmpty()
    @ApiProperty({ description: 'nom de la faculte' })
    nom_faculte: string;
    @IsNotEmpty()
    @ApiProperty({ description: 'niveau de la faculte' })
    degree: string;
    @IsNotEmpty()
    @ApiProperty({ description: 'le nombre annee que va durer le cycle' })
    duree: number;
    @ApiProperty({ description: 'note de passage pour la faculte' })
        
    @IsPositive() 
    @IsOptional()    
    note_de_passage: number;
    @ApiProperty({ description: 'nombre de matiere pour empecher le ssage en niveau superieur' })
    @IsPositive()
    @IsOptional()    
    nombre_matiere: number;

    @IsOptional()
    @ApiProperty({ description: 'description de la faculte' })
    description: string;
}
