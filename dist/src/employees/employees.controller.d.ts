import { EmployeesService } from './employees.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
export declare class EmployeesController {
    private readonly employeesService;
    constructor(employeesService: EmployeesService);
    create(createEmployeeDto: CreateEmployeeDto): Promise<{
        message: string;
    }>;
    findAll(page: number): Promise<import("../commons/paginate-result.interface").PaginateResult>;
    findOne(id: string): Promise<any>;
    update(id: number, updateEmployeeDto: UpdateEmployeeDto): Promise<string>;
    remove(id: number): Promise<import("../persons/entities/person.entity").Person>;
}
