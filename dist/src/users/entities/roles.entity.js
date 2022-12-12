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
exports.Roles = void 0;
const user_entity_1 = require("./user.entity");
const typeorm_1 = require("typeorm");
let Roles = class Roles {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Roles.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], Roles.prototype, "role_name", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => user_entity_1.User, user => user.role),
    __metadata("design:type", user_entity_1.User)
], Roles.prototype, "user", void 0);
Roles = __decorate([
    (0, typeorm_1.Entity)()
], Roles);
exports.Roles = Roles;
//# sourceMappingURL=roles.entity.js.map