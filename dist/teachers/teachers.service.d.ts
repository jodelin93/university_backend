import { AbstracService } from 'src/commons/abstract.service';
import { PersonsService } from 'src/persons/persons.service';
import { Repository } from 'typeorm';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';
import { Teacher } from './entities/teacher.entity';
export declare class TeachersService extends AbstracService {
    private personService;
    private teacherRepo;
    constructor(personService: PersonsService, teacherRepo: Repository<Teacher>);
    create(createTeacherDto: CreateTeacherDto): Promise<Teacher>;
    findOneTeacher(uuid: string, relations?: any[]): Promise<any>;
    updateOneTeacher(uuid: string, updateTeacherDto: UpdateTeacherDto): Promise<Teacher>;
    removeOneTeacher(uuid: string): Promise<any>;
}
