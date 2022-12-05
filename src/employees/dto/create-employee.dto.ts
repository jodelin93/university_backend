import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { CreatePersonDto } from 'src/persons/dto/create-person.dto';

export class CreateEmployeeDto extends CreatePersonDto {
  @IsNotEmpty()
  @ApiProperty({description:'fonction de l\'employe '}) 
  fonction: string;

  @IsNotEmpty()
  
  @ApiPropertyOptional({description:'fonction de l\'employe ',type:Date}) 
  date_embauche: string;
}
