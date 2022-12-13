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
exports.Person = exports.Sexe = void 0;
const typeorm_1 = require("typeorm");
var Sexe;
(function (Sexe) {
    Sexe["MASCULIN"] = "masculin";
    Sexe["FEMININ"] = "feminin";
    Sexe["AUTRES"] = "autres";
})(Sexe = exports.Sexe || (exports.Sexe = {}));
let Person = class Person {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Person.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    (0, typeorm_1.Generated)("uuid"),
    __metadata("design:type", String)
], Person.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 255 }),
    __metadata("design:type", String)
], Person.prototype, "nom", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 255 }),
    __metadata("design:type", String)
], Person.prototype, "prenom", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: Sexe, default: Sexe.MASCULIN }),
    __metadata("design:type", String)
], Person.prototype, "sexe", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 255, unique: true, nullable: true }),
    __metadata("design:type", String)
], Person.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 255, unique: true, nullable: true }),
    __metadata("design:type", String)
], Person.prototype, "telephone", void 0);
__decorate([
    (0, typeorm_1.Column)("date"),
    __metadata("design:type", Date)
], Person.prototype, "date_naissance", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Person.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Person.prototype, "updatedAt", void 0);
Person = __decorate([
    (0, typeorm_1.Entity)()
], Person);
exports.Person = Person;
//# sourceMappingURL=person.entity.js.map