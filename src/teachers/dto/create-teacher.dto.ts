import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { CreatePersonDto } from 'src/persons/dto/create-person.dto';

export class CreateTeacherDto extends CreatePersonDto {
  @ApiProperty({ description: 'le plus haut academique du professeur' })
  @IsNotEmpty()
  niveau: string;
}
