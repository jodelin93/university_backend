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
exports.StudentsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const abstract_service_1 = require("../commons/abstract.service");
const persons_service_1 = require("../persons/persons.service");
const typeorm_2 = require("typeorm");
const student_entity_1 = require("./entities/student.entity");
const faker_1 = require("@faker-js/faker");
let StudentsService = class StudentsService extends abstract_service_1.AbstracService {
    constructor(personService, studentRepo) {
        super(studentRepo);
        this.personService = personService;
        this.studentRepo = studentRepo;
    }
    createRandomUser() {
        return {
            nom: faker_1.faker.name.lastName(),
            prenom: faker_1.faker.name.firstName(),
            date_naissance: faker_1.faker.date.birthdate().toISOString(),
            lieu_naissance: faker_1.faker.address.cityName(),
            sexe: 'masculin',
            nif: faker_1.faker.random.numeric(10),
            cin: faker_1.faker.random.numeric(15),
            telephone: faker_1.faker.phone.number(),
            email: faker_1.faker.internet.email(),
            groupe_sanguin: 'O+',
            statut_matrimonial: 'single',
        };
    }
    pad(num, size = 6) {
        num = num.toString();
        while (num.length < size)
            num = '0' + num;
        return num;
    }
    async findOneById(id) {
        return await this.studentRepo.findOneBy({ id });
    }
    async create(createStudentDto) {
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
    async findOneStudent(uuid, relations = []) {
        const person = await this.personService.findOne(uuid);
        return super.findOne({ personId: person.id }, relations);
    }
    async updateOneStudent(uuid, updateStudentDto) {
        const oneStudent = await this.findOneStudent(uuid);
        const id = oneStudent.id;
        const student = await this.studentRepo.preload(Object.assign({ id }, updateStudentDto));
        await this.personService.update(uuid, updateStudentDto);
        const updateStudent = await this.studentRepo.save(student);
        return await this.studentRepo.findOne({
            where: { id: updateStudent.id },
            relations: ['person'],
        });
    }
    async removeOneStudent(uuid) {
        const student = await this.findOneStudent(uuid, ['person']);
        const delStudent = await this.studentRepo.remove(student);
        if (delStudent) {
            await this.personService.remove(student.person.uuid);
            return student;
        }
    }
};
StudentsService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, typeorm_1.InjectRepository)(student_entity_1.Student)),
    __metadata("design:paramtypes", [persons_service_1.PersonsService,
        typeorm_2.Repository])
], StudentsService);
exports.StudentsService = StudentsService;
//# sourceMappingURL=students.service.js.map