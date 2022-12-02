import { PersonsService } from './../persons/persons.service';
import { BadRequestException, Injectable } from '@nestjs/common';
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
    const emp = this.empRepo.create(createEmployeeDto)
    const person = await this.personService.create(createEmployeeDto)
    emp.person = person;
    await this.empRepo.save(emp);
    return{message:`employee with id ${person.id} successfully saved` }
  }

  async findAll(page=1) {
    const take = 15;
    if (page === 0 || !page) {
      page = 1;
    }
   
    const [data, total] = await this.empRepo.findAndCount({ relations: ['person'], skip: (page - 1) * take, take })
    
    return {
      data,
      meta: {
        total,
        CurrentPage: page,
        nextPage: page + 1,
        previousPage: Math.ceil(page - 1),
        firstPaginate: 1,
        lastPaginate: Math.ceil(total / take),
      },
    };
  }

  async findOne(id: number) {
    const emp = await this.empRepo.findOne({ where: { id }, relations: ['person'] })
    
   
    if (!emp) {
      throw new BadRequestException(`employee with id ${id} does not found`)
    }
    return emp;
  }

  async update(id: number, updateEmployeeDto: UpdateEmployeeDto) {
    const oneEmployee = await this.findOne(id)
    if (!oneEmployee) {
      throw new BadRequestException(`employee with id ${id} does not found`)
    }
    const emp = await this.empRepo.preload({id,...updateEmployeeDto })
    await this.personService.update(id, updateEmployeeDto)
    this.empRepo.save(emp)
      return `employee with id ${id} where updated `
  }
  async remove(id: number) {
    const employee=await this.findOne(id)
    await this.empRepo.remove(employee)
    return await this.personService.remove(id)
  }
}
