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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
const person_entity_1 = require("../../persons/entities/person.entity");
const typeorm_1 = require("typeorm");
const student_infos_entity_1 = require("./student.infos.entity");
let Student = class Student {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Student.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Student.prototype, "code", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Student.prototype, "lieu_naissance", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Student.prototype, "groupe_sanguin", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Student.prototype, "statut_matrimonial", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Student.prototype, "cin", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Student.prototype, "nif", void 0);
__decorate([
    (0, typeorm_1.Column)("tinyint", { default: 0 }),
    __metadata("design:type", Boolean)
], Student.prototype, "isValidate", void 0);
__decorate([
    (0, typeorm_1.Column)("tinyint", { default: 1 }),
    __metadata("design:type", Boolean)
], Student.prototype, "isActive", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Student.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Student.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Student.prototype, "personId", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => person_entity_1.Person),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", person_entity_1.Person)
], Student.prototype, "person", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => student_infos_entity_1.StudentInformationsCompementaires, studentinfo => studentinfo.student, { cascade: true }),
    __metadata("design:type", student_infos_entity_1.StudentInformationsCompementaires)
], Student.prototype, "studentinfos", void 0);
Student = __decorate([
    (0, typeorm_1.Entity)()
], Student);
exports.Student = Student;
//# sourceMappingURL=student.entity.js.map