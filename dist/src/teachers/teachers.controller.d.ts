import { TeachersService } from './teachers.service';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';
export declare class TeachersController {
    private readonly teachersService;
    constructor(teachersService: TeachersService);
    create(createTeacherDto: CreateTeacherDto): Promise<import("./entities/teacher.entity").Teacher>;
    findAll(page?: number): Promise<import("../commons/paginate-result.interface").PaginateResult>;
    findFilterAll(): Promise<any[]>;
    findOne(uuid: string): Promise<any>;
    update(uuid: string, updateTeacherDto: UpdateTeacherDto): Promise<import("./entities/teacher.entity").Teacher>;
    remove(uuid: string): Promise<any>;
}
