import { IsNotEmpty } from 'class-validator';
import { CreatePersonDto } from 'src/persons/dto/create-person.dto';
export class CreateEmployeeDto extends CreatePersonDto {
  @IsNotEmpty()
  fonction: string;
  @IsNotEmpty()
  date_embauche: string;
}
