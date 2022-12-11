import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AbstracService } from 'src/commons/abstract.service';
import { Repository } from 'typeorm';
import { CreateStudentInfoDto } from './dto/create-infos-students.dto';
import { StudentInformationsCompementaires } from './entities/student.infos.entity';
import { StudentsService } from './students.service';
import { faker } from '@faker-js/faker';

@Injectable()
export class StudentInfoService extends AbstracService {
  constructor(
    @InjectRepository(StudentInformationsCompementaires)
    private studentInfoRepo: Repository<StudentInformationsCompementaires>,
    private readonly studentService: StudentsService,
  ) {
    super(studentInfoRepo)
  }

  createRandomUser(): CreateStudentInfoDto {
    
    return {
      ocupation: faker.name.jobTitle(),
      personne_resp: faker.name.fullName(),
      telephone_resp: faker.phone.number(),
      maladie: faker.address.cityName(),
      personne_contact: faker.name.fullName(),
      annee_fin_etude: faker.date.past(2).toISOString(),
      nom_etablissemet:faker.company.name(),
      etude_precedente: faker.date.past(2).toISOString(),
      option_precendente: faker.name.jobTitle(),
      annee_etude_precedente: faker.date.past(2).toISOString(),
    };
  }

  async createinfoStudent(idStudent: number, data: CreateStudentInfoDto): Promise<any> {
    const student = await this.studentService.findOne({ id: idStudent });
    const studentInfo = this.studentInfoRepo.create(data);
    studentInfo.student = student;
    return this.studentInfoRepo.save(studentInfo);
    }
    
    async updateinfoStudent(id: number, data:any): Promise<any> {
        const findData = await this.findOne({ studentId:id });
        if (!findData) {
            throw new BadRequestException(`data not found`)
        }
    
        const convertData = Object.assign(findData, data);
    
        await this.studentInfoRepo.update(id, data);
        return convertData;
    }
}
