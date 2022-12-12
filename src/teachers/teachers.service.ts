import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AbstracService } from 'src/commons/abstract.service';
import { PersonsService } from 'src/persons/persons.service';
import { Repository } from 'typeorm';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';
import { Teacher } from './entities/teacher.entity';

@Injectable()
export class TeachersService extends AbstracService {
  constructor(
    private personService: PersonsService,
    @InjectRepository(Teacher) private teacherRepo: Repository<Teacher>,
  ) {
    super(teacherRepo);
  }

  async create(createTeacherDto: CreateTeacherDto) {
    const student = this.teacherRepo.create(createTeacherDto);
    const person = await this.personService.create(createTeacherDto);
    student.person = person;
    return await this.teacherRepo.save(student);
  }

  async findOneTeacher(uuid: string, relations: any[] = []) {
    const person = await this.personService.findOne(uuid);
    return super.findOne({ personId: person.id }, relations);
  }

  async updateOneTeacher(uuid: string, updateTeacherDto: UpdateTeacherDto) {
    const oneTeacher = await this.findOneTeacher(uuid);
    const id = oneTeacher.id;
    const teacher = await this.teacherRepo.preload({ id, ...updateTeacherDto });
    await this.personService.update(uuid, updateTeacherDto);
    const updateTeacher = await this.teacherRepo.save(teacher);
    return await this.teacherRepo.findOne({
      where: { id: updateTeacher.id },
      relations: ['person'],
    });
  }

  async removeOneTeacher(uuid: string) {
    const teacher = await this.findOneTeacher(uuid, ['person']);
    await this.teacherRepo.remove(teacher);
    await this.personService.remove(teacher.uuid);
    return teacher;
  }
}
