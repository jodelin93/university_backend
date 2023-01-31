import { AbstracService } from 'src/commons/abstract.service';
import { Repository } from 'typeorm';
import { CreateStudentInfoDto } from './dto/create-infos-students.dto';
import { StudentInformationsCompementaires } from './entities/student.infos.entity';
import { StudentsService } from './students.service';
export declare class StudentInfoService extends AbstracService {
    private studentInfoRepo;
    private readonly studentService;
    constructor(studentInfoRepo: Repository<StudentInformationsCompementaires>, studentService: StudentsService);
    createRandomUser(): CreateStudentInfoDto;
    createinfoStudent(idStudent: number, data: CreateStudentInfoDto): Promise<any>;
    updateinfoStudent(id: number, data: any): Promise<any>;
}
