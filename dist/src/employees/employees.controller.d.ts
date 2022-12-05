import { EmployeesService } from './employees.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
export declare class EmployeesController {
    private readonly employeesService;
    constructor(employeesService: EmployeesService);
    create(createEmployeeDto: CreateEmployeeDto): Promise<{
        message: string;
    }>;
    findAll(page: number): Promise<{
        data: import("./entities/employee.entity").Employee[];
        meta: {
            total: number;
            CurrentPage: number;
            nextPage: number;
            previousPage: number;
            firstPaginate: number;
            lastPaginate: number;
        };
    }>;
    findOne(id: string): Promise<import("./entities/employee.entity").Employee>;
    update(id: string, updateEmployeeDto: UpdateEmployeeDto): Promise<string>;
    remove(id: string): Promise<import("../persons/entities/person.entity").Person>;
}
