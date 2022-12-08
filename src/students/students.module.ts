import { Module } from '@nestjs/common';
import { StudentsService } from './students.service';
import { StudentsController } from './students.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from './entities/student.entity';
import { PersonsModule } from 'src/persons/persons.module';

@Module({
  imports:[TypeOrmModule.forFeature([Student]),PersonsModule],
  controllers: [StudentsController],
  providers: [StudentsService]
})
export class StudentsModule {}
