"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentsModule = void 0;
const student_infos_entity_1 = require("./entities/student.infos.entity");
const common_1 = require("@nestjs/common");
const students_service_1 = require("./students.service");
const students_controller_1 = require("./students.controller");
const typeorm_1 = require("@nestjs/typeorm");
const student_entity_1 = require("./entities/student.entity");
const persons_module_1 = require("../persons/persons.module");
const student_infos_service_1 = require("./student.infos.service");
const student_infos_controllers_1 = require("./student.infos.controllers");
let StudentsModule = class StudentsModule {
};
StudentsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([student_entity_1.Student, student_infos_entity_1.StudentInformationsCompementaires]),
            persons_module_1.PersonsModule,
        ],
        controllers: [students_controller_1.StudentsController, student_infos_controllers_1.StudentInfoController],
        providers: [students_service_1.StudentsService, student_infos_service_1.StudentInfoService],
    })
], StudentsModule);
exports.StudentsModule = StudentsModule;
//# sourceMappingURL=students.module.js.map