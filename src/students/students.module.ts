import { StudentInformationsCompementaires } from './entities/student.infos.entity';
import { Module } from '@nestjs/common';
import { StudentsService } from './students.service';
import { StudentsController } from './students.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from './entities/student.entity';
import { PersonsModule } from 'src/persons/persons.module';
import { StudentInfoService } from './student.infos.service';
import { StudentInfoController } from './student.infos.controllers';

@Module({
  imports: [
    TypeOrmModule.forFeature([Student, StudentInformationsCompementaires]),
    PersonsModule,
  ],
  controllers: [StudentsController, StudentInfoController],
  providers: [StudentsService, StudentInfoService],
})
export class StudentsModule {}
