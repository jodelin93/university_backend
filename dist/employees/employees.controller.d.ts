import { EmployeesService } from './employees.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
export declare class EmployeesController {
    private readonly employeesService;
    constructor(employeesService: EmployeesService);
    create(createEmployeeDto: CreateEmployeeDto): Promise<import("./entities/employee.entity").Employee>;
    findAll(page?: number): Promise<import("../commons/paginate-result.interface").PaginateResult>;
    findFilterAll(): Promise<any[]>;
    findOne(uuid: string): Promise<any>;
    update(uuid: string, updateEmployeeDto: UpdateEmployeeDto): Promise<import("./entities/employee.entity").Employee>;
    remove(uuid: string): Promise<any>;
}
