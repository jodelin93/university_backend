import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AbstracService } from 'src/commons/abstract.service';
import { PersonsService } from 'src/persons/persons.service';
import { Like, Repository } from 'typeorm';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { Student } from './entities/student.entity';
import { faker } from '@faker-js/faker';
import { Person } from 'src/persons/entities/person.entity';

@Injectable()
export class StudentsService extends AbstracService {
  constructor(
    private personService: PersonsService,
    @InjectRepository(Student) private studentRepo: Repository<Student>,

  ) {
    super(studentRepo);
  }

  createRandomUser(): CreateStudentDto {
    return {
      nom: faker.name.lastName(),
      prenom: faker.name.firstName(),
      date_naissance: faker.date.birthdate().toISOString(),
      lieu_naissance: faker.address.cityName(),
      sexe: 'masculin',
      nif: faker.random.numeric(10),
      cin: faker.random.numeric(15),
      telephone: faker.phone.number(),
      email: faker.internet.email(),
      groupe_sanguin: 'O+',
      statut_matrimonial: 'single',
    };
  }

  pad(num: string, size = 6) {
    num = num.toString();
    while (num.length < size) num = '0' + num;
    return num;
  }

  async findOneById(id: number) {
    return await this.studentRepo.findOneBy({ id });
  }



  async create(createStudentDto: CreateStudentDto) {
    const student = this.studentRepo.create(createStudentDto);
    const person = await this.personService.create(createStudentDto);
    student.person = person;
    await this.studentRepo.save(student);
    const count = await this.studentRepo.count();
    const random = this.pad(Math.floor(Math.random() * 1000).toString(), 3);
    const updateStudent = await this.studentRepo.preload({
      id: student.id,
      code: random + '-' + this.pad(count.toString()),
    });
    await this.studentRepo.save(updateStudent);
    return this.findOneStudent(person.uuid, ['person', 'studentinfos']);
  }

  async findOneStudent(uuid: string, relations: any[] = []) {
    const person = await this.personService.findOne(uuid);
    return super.findOne({ personId: person.id }, relations);
  }

  async search(data: any): Promise<any[]>{
    return await this.studentRepo.query("select * from person inner join student on person.id=student.personId where code like '%"+data+"%' or nom like '%"+data+"%' or prenom like '%"+data+"%' ");
    


    
}

  async updateOneStudent(uuid: string, updateStudentDto: UpdateStudentDto) {
    const oneStudent = await this.findOneStudent(uuid);
    const id = oneStudent.id;
    const student = await this.studentRepo.preload({ id, ...updateStudentDto });
    await this.personService.update(uuid, updateStudentDto);
    const updateStudent = await this.studentRepo.save(student);
    return await this.studentRepo.findOne({
      where: { id: updateStudent.id },
      relations: ['person'],
    });
  }

  async removeOneStudent(uuid: string) {
    const student = await this.findOneStudent(uuid, ['person']);
    const delStudent = await this.studentRepo.remove(student);
    if (delStudent) {
      await this.personService.remove(student.person.uuid);
      return student;
    }
    }
   
}
