import { PersonsService } from './../persons/persons.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { Employee } from './entities/employee.entity';
import { Repository } from 'typeorm';
export declare class EmployeesService {
    private personService;
    private empRepo;
    constructor(personService: PersonsService, empRepo: Repository<Employee>);
    create(createEmployeeDto: CreateEmployeeDto): Promise<{
        message: string;
    }>;
    findAll(page?: number): Promise<{
        data: Employee[];
        meta: {
            total: number;
            CurrentPage: number;
            nextPage: number;
            previousPage: number;
            firstPaginate: number;
            lastPaginate: number;
        };
    }>;
    findOne(id: number): Promise<Employee>;
    update(id: number, updateEmployeeDto: UpdateEmployeeDto): Promise<string>;
    remove(id: number): Promise<import("../persons/entities/person.entity").Person>;
}
