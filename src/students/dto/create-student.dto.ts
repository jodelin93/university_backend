import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional } from "class-validator";
import { CreatePersonDto } from "src/persons/dto/create-person.dto";

export class CreateStudentDto extends CreatePersonDto {
    @IsNotEmpty()
    @ApiProperty({description:'lieu naissance de l\'etudiant '}) 
    lieu_naissance: string;

    @IsNotEmpty()
    @ApiProperty({description:'groupe_sanguin de l\'etudiant '}) 
    groupe_sanguin: string;

    @IsNotEmpty()
    @ApiProperty({description:'statut matrimonial de l\'etudiant '}) 
    statut_matrimonial: string;

    @ApiPropertyOptional({ description: 'cin de l\'etudiant ' }) 
    @IsOptional()
    cin?: string;
    
    @ApiPropertyOptional({ description: 'nif de l\'etudiant ' })
    @IsOptional()    
    nif?: string;
}
