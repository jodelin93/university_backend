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
    create(createEmployeeDto: CreateEmployeeDto): Promise<{
        message: string;
    }>;
    update(id: number, updateEmployeeDto: UpdateEmployeeDto): Promise<string>;
    remove(id: number): Promise<import("../persons/entities/person.entity").Person>;
}
