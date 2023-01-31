import { PersonsService } from './../persons/persons.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { Employee } from './entities/employee.entity';
import { Repository } from 'typeorm';
import { AbstracService } from './../commons/abstract.service';
export declare class EmployeesService extends AbstracService {
    private personService;
    private empRepo;
    constructor(personService: PersonsService, empRepo: Repository<Employee>);
    createRandomUser(): CreateEmployeeDto;
    create(createEmployeeDto: CreateEmployeeDto): Promise<Employee>;
    findOneEmployee(uuid: string, relations?: any[]): Promise<any>;
    updateOneEmployee(uuid: string, updateEmployeeDto: UpdateEmployeeDto): Promise<Employee>;
    removeOneEmployee(uuid: string): Promise<any>;
}
