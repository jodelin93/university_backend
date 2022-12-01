import { PersonsService } from './../persons/persons.service';
import { Injectable } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Employee } from './entities/employee.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EmployeesService {
  constructor(
    private personService: PersonsService,
    @InjectRepository(Employee) private empRepo: Repository<Employee>,
  ) {}
  async create(createEmployeeDto: CreateEmployeeDto) {
    const employee = await this.personService.create(createEmployeeDto);
    console.log(createEmployeeDto);

    return await this.empRepo.save({
      ...createEmployeeDto,
      personId: employee.id,
    });
  }

  findAll() {
    return `This action returns all employees`;
  }

  findOne(id: number) {
    return `This action returns a #${id} employee`;
  }

  update(id: number, updateEmployeeDto: UpdateEmployeeDto) {
    return `This action updates a #${id} employee`;
  }

  remove(id: number) {
    return `This action removes a #${id} employee`;
  }
}
