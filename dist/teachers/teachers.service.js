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
exports.TeachersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const abstract_service_1 = require("../commons/abstract.service");
const persons_service_1 = require("../persons/persons.service");
const typeorm_2 = require("typeorm");
const teacher_entity_1 = require("./entities/teacher.entity");
let TeachersService = class TeachersService extends abstract_service_1.AbstracService {
    constructor(personService, teacherRepo) {
        super(teacherRepo);
        this.personService = personService;
        this.teacherRepo = teacherRepo;
    }
    async create(createTeacherDto) {
        const student = this.teacherRepo.create(createTeacherDto);
        const person = await this.personService.create(createTeacherDto);
        student.person = person;
        return await this.teacherRepo.save(student);
    }
    async findOneTeacher(uuid, relations = []) {
        const person = await this.personService.findOne(uuid);
        return super.findOne({ personId: person.id }, relations);
    }
    async updateOneTeacher(uuid, updateTeacherDto) {
        const oneTeacher = await this.findOneTeacher(uuid);
        const id = oneTeacher.id;
        const teacher = await this.teacherRepo.preload(Object.assign({ id }, updateTeacherDto));
        await this.personService.update(uuid, updateTeacherDto);
        const updateTeacher = await this.teacherRepo.save(teacher);
        return await this.teacherRepo.findOne({
            where: { id: updateTeacher.id },
            relations: ['person'],
        });
    }
    async removeOneTeacher(uuid) {
        const teacher = await this.findOneTeacher(uuid, ['person']);
        const delTeacher = await this.teacherRepo.remove(teacher);
        if (delTeacher) {
            await this.personService.remove(teacher.person.uuid);
            return teacher;
        }
    }
};
TeachersService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, typeorm_1.InjectRepository)(teacher_entity_1.Teacher)),
    __metadata("design:paramtypes", [persons_service_1.PersonsService,
        typeorm_2.Repository])
], TeachersService);
exports.TeachersService = TeachersService;
//# sourceMappingURL=teachers.service.js.map