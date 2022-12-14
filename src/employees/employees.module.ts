import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { EmployeesController } from './employees.controller';
import { PersonsModule } from 'src/persons/persons.module';
import { Employee } from './entities/employee.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Employee]), PersonsModule,],
  controllers: [EmployeesController],
  providers: [EmployeesService],
})
export class EmployeesModule {}
