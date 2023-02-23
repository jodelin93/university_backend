import { PartialType } from '@nestjs/swagger';
import { CreateFaculteDto } from './create-faculte.dto';

export class UpdateFaculteDto extends PartialType(CreateFaculteDto) {}
