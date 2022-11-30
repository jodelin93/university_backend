import { Module } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { EmployeesController } from './employees.controller';
import { Person } from 'src/persons/entities/person.entity';
import { PersonsModule } from 'src/persons/persons.module';

@Module({
  imports: [PersonsModule],
  controllers: [EmployeesController],
  providers: [EmployeesService],
})
export class EmployeesModule {}
