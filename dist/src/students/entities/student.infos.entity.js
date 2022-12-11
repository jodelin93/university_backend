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
exports.StudentInformationsCompementaires = void 0;
const typeorm_1 = require("typeorm");
const student_entity_1 = require("./student.entity");
let StudentInformationsCompementaires = class StudentInformationsCompementaires {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], StudentInformationsCompementaires.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], StudentInformationsCompementaires.prototype, "ocupation", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], StudentInformationsCompementaires.prototype, "personne_resp", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], StudentInformationsCompementaires.prototype, "telephone_resp", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], StudentInformationsCompementaires.prototype, "maladie", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], StudentInformationsCompementaires.prototype, "personne_contact", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], StudentInformationsCompementaires.prototype, "annee_fin_etude", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], StudentInformationsCompementaires.prototype, "nom_etablissemet", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], StudentInformationsCompementaires.prototype, "etude_precedente", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], StudentInformationsCompementaires.prototype, "option_precendente", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], StudentInformationsCompementaires.prototype, "annee_etude_precedente", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], StudentInformationsCompementaires.prototype, "studentId", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => student_entity_1.Student, student => student.studentinfos),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", student_entity_1.Student)
], StudentInformationsCompementaires.prototype, "student", void 0);
StudentInformationsCompementaires = __decorate([
    (0, typeorm_1.Entity)()
], StudentInformationsCompementaires);
exports.StudentInformationsCompementaires = StudentInformationsCompementaires;
//# sourceMappingURL=student.infos.entity.js.map