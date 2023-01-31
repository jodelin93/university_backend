import { StudentsService } from './students.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
export declare class StudentsController {
    private readonly studentsService;
    constructor(studentsService: StudentsService);
    create(createStudentDto: CreateStudentDto): Promise<any>;
    findAll(page?: number): Promise<import("../commons/paginate-result.interface").PaginateResult>;
    findFilterAll(): Promise<any[]>;
    findOne(uuid: string): Promise<any>;
    update(uuid: string, updateStudentDto: UpdateStudentDto): Promise<import("./entities/student.entity").Student>;
    remove(uuid: string): Promise<any>;
}
