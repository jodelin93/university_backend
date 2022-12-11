
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsOptional } from "class-validator";

export class CreateStudentInfoDto {
    @IsOptional()
    @ApiProperty({description:'ocupation de l\'etudiant '}) 
    ocupation: string;

    @IsOptional()
    @ApiProperty({description:'personne reponsable de l\'etudiant '}) 
    personne_resp: string;

    @IsOptional()
    @ApiProperty({description:'telephone de la personne responsable de l\'etudiant '}) 
    telephone_resp: string;

    @ApiPropertyOptional({ description: 'si l\'etudiant souffre d\'une maladie ' }) 
    @IsOptional()
    maladie?: string;
    
    @ApiPropertyOptional({ description: 'personne a contacter en cas de maladie de l\'etudiant ' })
    @IsOptional()    
    personne_contact?: string;
    
    @ApiPropertyOptional({ description: 'anneee fin d\'etude academique de l\'etudiant ' })
    @IsOptional()    
    annee_fin_etude?: string;

    @ApiPropertyOptional({ description: 'etablissement fin d\'etude academique de l\'etudiant ' })
    @IsOptional()    
    nom_etablissemet?: string;

    @ApiPropertyOptional({ description: 'si l\'etudiant a fait une etude universitaire precedemement ' })
    @IsOptional()    
    etude_precedente?: string;

    @ApiPropertyOptional({ description: 'si l\'etudiant a fait une etude universitaire precedemement, prcisez otion ' })
    @IsOptional()    
    option_precendente?: string;

    @ApiPropertyOptional({ description: 'si l\'etudiant a fait une etude universitaire precedemement, prcisez annee ' })
    @IsOptional()    
    annee_etude_precedente?: string;
}
