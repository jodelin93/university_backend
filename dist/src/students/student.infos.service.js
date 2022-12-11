"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentInfoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const abstract_service_1 = require("../commons/abstract.service");
const typeorm_2 = require("typeorm");
const student_infos_entity_1 = require("./entities/student.infos.entity");
const students_service_1 = require("./students.service");
const faker_1 = require("@faker-js/faker");
let StudentInfoService = class StudentInfoService extends abstract_service_1.AbstracService {
    constructor(studentInfoRepo, studentService) {
        super(studentInfoRepo);
        this.studentInfoRepo = studentInfoRepo;
        this.studentService = studentService;
    }
    createRandomUser() {
        return {
            ocupation: faker_1.faker.name.jobTitle(),
            personne_resp: faker_1.faker.name.fullName(),
            telephone_resp: faker_1.faker.phone.number(),
            maladie: faker_1.faker.address.cityName(),
            personne_contact: faker_1.faker.name.fullName(),
            annee_fin_etude: faker_1.faker.date.past(2).toISOString(),
            nom_etablissemet: faker_1.faker.company.name(),
            etude_precedente: faker_1.faker.date.past(2).toISOString(),
            option_precendente: faker_1.faker.name.jobTitle(),
            annee_etude_precedente: faker_1.faker.date.past(2).toISOString(),
        };
    }
    async createinfoStudent(idStudent, data) {
        const student = await this.studentService.findOne({ id: idStudent });
        const studentInfo = this.studentInfoRepo.create(data);
        studentInfo.student = student;
        return this.studentInfoRepo.save(studentInfo);
    }
    async updateinfoStudent(id, data) {
        const findData = await this.findOne({ studentId: id });
        if (!findData) {
            throw new common_1.BadRequestException(`data not found`);
        }
        const convertData = Object.assign(findData, data);
        await this.studentInfoRepo.update(id, data);
        return convertData;
    }
};
StudentInfoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(student_infos_entity_1.StudentInformationsCompementaires)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        students_service_1.StudentsService])
], StudentInfoService);
exports.StudentInfoService = StudentInfoService;
//# sourceMappingURL=student.infos.service.js.map