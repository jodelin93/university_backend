import { PersonsService } from './../persons/persons.service';
import { Injectable } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Employee } from './entities/employee.entity';
import { Repository } from 'typeorm';
import { AbstracService} from './../commons/abstract.service'

@Injectable()
export class EmployeesService extends AbstracService {
  constructor(
    private personService: PersonsService,
    @InjectRepository(Employee) private empRepo: Repository<Employee>,
  ) { super(empRepo) }
  

  async create(createEmployeeDto: CreateEmployeeDto) {
    const emp = this.empRepo.create(createEmployeeDto)
    const person = await this.personService.create(createEmployeeDto)
    emp.person = person;
    await this.empRepo.save(emp);
    return this.findOneEmployee(person.uuid,['person'])
  }

  async findOneEmployee(uuid: string, relations: any[] = []): Promise<any> {
    const emp = await this.personService.findOne(uuid)
    return super.findOne({  id: emp.id },relations )
}


  async updateOneEmployee(uuid: string, updateEmployeeDto: UpdateEmployeeDto) {
    const oneEmployee = await this.findOneEmployee(uuid)
    const id = oneEmployee.id;
    const emp = await this.empRepo.preload({id,...updateEmployeeDto })
    await this.personService.update(uuid, updateEmployeeDto)
    const updateEmp =await  this.empRepo.save(emp);
    return await this.empRepo.findOne({where:{id:updateEmp.id},relations:['person']})
    
  }
  async removeOneEmployee(uuid: string) {
    const employee=await this.findOneEmployee(uuid,['person'])
    await this.empRepo.remove(employee)
    await this.personService.remove(employee.uuid)
    return employee;
  }
}
