"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FaculteModule = void 0;
const typeorm_1 = require("@nestjs/typeorm");
const common_1 = require("@nestjs/common");
const faculte_service_1 = require("./faculte.service");
const faculte_controller_1 = require("./faculte.controller");
const faculte_entity_1 = require("./entities/faculte.entity");
let FaculteModule = class FaculteModule {
};
FaculteModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([faculte_entity_1.Faculte])],
        controllers: [faculte_controller_1.FaculteController],
        providers: [faculte_service_1.FaculteService]
    })
], FaculteModule);
exports.FaculteModule = FaculteModule;
//# sourceMappingURL=faculte.module.js.map