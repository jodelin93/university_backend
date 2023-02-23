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
exports.CreateFaculteDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateFaculteDto {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ description: 'nom de la faculte' }),
    __metadata("design:type", String)
], CreateFaculteDto.prototype, "nom_faculte", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ description: 'niveau de la faculte' }),
    __metadata("design:type", String)
], CreateFaculteDto.prototype, "degree", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ description: 'le nombre annee que va durer le cycle' }),
    __metadata("design:type", Number)
], CreateFaculteDto.prototype, "duree", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'note de passage pour la faculte' }),
    (0, class_validator_1.IsPositive)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreateFaculteDto.prototype, "note_de_passage", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'nombre de matiere pour empecher le ssage en niveau superieur' }),
    (0, class_validator_1.IsPositive)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreateFaculteDto.prototype, "nombre_matiere", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ description: 'description de la faculte' }),
    __metadata("design:type", String)
], CreateFaculteDto.prototype, "description", void 0);
exports.CreateFaculteDto = CreateFaculteDto;
//# sourceMappingURL=create-faculte.dto.js.map