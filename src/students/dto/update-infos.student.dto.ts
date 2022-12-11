import { CreateStudentInfoDto } from './create-infos-students.dto';
import { PartialType } from '@nestjs/swagger';

export class UpdateStudentInfoDto extends PartialType(CreateStudentInfoDto){

}