import { AbstracService } from 'src/commons/abstract.service';
import { PersonsService } from 'src/persons/persons.service';
import { Repository } from 'typeorm';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { Student } from './entities/student.entity';
export declare class StudentsService extends AbstracService {
    private personService;
    private studentRepo;
    constructor(personService: PersonsService, studentRepo: Repository<Student>);
    createRandomUser(): CreateStudentDto;
    pad(num: string, size?: number): string;
    findOneById(id: number): Promise<Student>;
    create(createStudentDto: CreateStudentDto): Promise<any>;
    findOneStudent(uuid: string, relations?: any[]): Promise<any>;
    updateOneStudent(uuid: string, updateStudentDto: UpdateStudentDto): Promise<Student>;
    removeOneStudent(uuid: string): Promise<any>;
}
