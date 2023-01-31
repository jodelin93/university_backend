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
exports.CreateStudentInfoDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateStudentInfoDto {
}
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ description: 'ocupation de l\'etudiant ' }),
    __metadata("design:type", String)
], CreateStudentInfoDto.prototype, "ocupation", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ description: 'personne reponsable de l\'etudiant ' }),
    __metadata("design:type", String)
], CreateStudentInfoDto.prototype, "personne_resp", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ description: 'telephone de la personne responsable de l\'etudiant ' }),
    __metadata("design:type", String)
], CreateStudentInfoDto.prototype, "telephone_resp", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'si l\'etudiant souffre d\'une maladie ' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateStudentInfoDto.prototype, "maladie", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'personne a contacter en cas de maladie de l\'etudiant ' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateStudentInfoDto.prototype, "personne_contact", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'anneee fin d\'etude academique de l\'etudiant ' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateStudentInfoDto.prototype, "annee_fin_etude", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'etablissement fin d\'etude academique de l\'etudiant ' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateStudentInfoDto.prototype, "nom_etablissemet", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'si l\'etudiant a fait une etude universitaire precedemement ' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateStudentInfoDto.prototype, "etude_precedente", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'si l\'etudiant a fait une etude universitaire precedemement, prcisez otion ' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateStudentInfoDto.prototype, "option_precendente", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'si l\'etudiant a fait une etude universitaire precedemement, prcisez annee ' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateStudentInfoDto.prototype, "annee_etude_precedente", void 0);
exports.CreateStudentInfoDto = CreateStudentInfoDto;
//# sourceMappingURL=create-infos-students.dto.js.map