import { CreateStudentInfoDto } from './dto/create-infos-students.dto';
import { UpdateStudentInfoDto } from './dto/update-infos.student.dto';
import { StudentInfoService } from './student.infos.service';
export declare class StudentInfoController {
    private readonly studentInfoService;
    constructor(studentInfoService: StudentInfoService);
    create(id: number, createStudentInfoDto: CreateStudentInfoDto): Promise<any>;
    update(id: number, updateStudentInfoDto: UpdateStudentInfoDto): Promise<any>;
}
