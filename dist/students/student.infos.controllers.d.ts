import { CreateStudentInfoDto } from './dto/create-infos-students.dto';
import { UpdateStudentInfoDto } from './dto/update-infos.student.dto';
import { StudentInfoService } from './student.infos.service';
export declare class StudentInfoController {
    private readonly studentInfoService;
    constructor(studentInfoService: StudentInfoService);
    create(id: number, createStudentInfoDto: CreateStudentInfoDto): Promise<any>;
    findOne(id: number): Promise<any>;
    find(): Promise<import("../commons/paginate-result.interface").PaginateResult>;
    update(id: number, updateStudentInfoDto: UpdateStudentInfoDto): Promise<any>;
    remove(id: number): Promise<any>;
}
