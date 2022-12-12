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
exports.StudentInfoController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const create_infos_students_dto_1 = require("./dto/create-infos-students.dto");
const update_infos_student_dto_1 = require("./dto/update-infos.student.dto");
const student_infos_service_1 = require("./student.infos.service");
let StudentInfoController = class StudentInfoController {
    constructor(studentInfoService) {
        this.studentInfoService = studentInfoService;
    }
    async create(id, createStudentInfoDto) {
        return this.studentInfoService.createinfoStudent(id, createStudentInfoDto);
    }
    findOne(id) {
        return this.studentInfoService.findOne(id);
    }
    async find() {
        return await this.studentInfoService.findAll(1, []);
    }
    async update(id, updateStudentInfoDto) {
        return this.studentInfoService.updateinfoStudent(id, updateStudentInfoDto);
    }
    remove(id) {
        return this.studentInfoService.remove(id);
    }
};
__decorate([
    (0, common_1.Post)(':id'),
    (0, swagger_1.ApiParam)({
        name: 'id',
        type: 'number',
        description: 'id etudiant'
    }),
    (0, swagger_1.ApiOperation)({ description: 'this is the endpoint for Creating  a student' }),
    (0, swagger_1.ApiBody)({ type: create_infos_students_dto_1.CreateStudentInfoDto }),
    (0, swagger_1.ApiCreatedResponse)({
        description: 'The record has been successfully created.',
        type: create_infos_students_dto_1.CreateStudentInfoDto,
    }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        type: 'number',
        description: 'id etudiant'
    }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, create_infos_students_dto_1.CreateStudentInfoDto]),
    __metadata("design:returntype", Promise)
], StudentInfoController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiParam)({
        name: 'id',
        type: 'number',
        description: 'id etudiant'
    }),
    (0, swagger_1.ApiResponse)({ type: create_infos_students_dto_1.CreateStudentInfoDto }),
    (0, swagger_1.ApiOperation)({
        description: 'this is the endpoint for retrieving  one student infos',
    }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], StudentInfoController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], StudentInfoController.prototype, "find", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiParam)({
        name: 'id',
        type: 'number',
        description: 'id etudiant'
    }),
    (0, swagger_1.ApiCreatedResponse)({
        description: 'The record has been successfully updated.',
        type: update_infos_student_dto_1.UpdateStudentInfoDto,
    }),
    (0, swagger_1.ApiOperation)({
        description: 'this is the endpoint for updating  a student infos',
    }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        type: 'number',
        description: 'id de l\'enregistrement'
    }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_infos_student_dto_1.UpdateStudentInfoDto]),
    __metadata("design:returntype", Promise)
], StudentInfoController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiParam)({
        name: 'id',
        type: 'number',
        description: 'id etudiant'
    }),
    (0, swagger_1.ApiOperation)({
        description: 'this is the endpoint for deleting  one student infos',
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], StudentInfoController.prototype, "remove", null);
StudentInfoController = __decorate([
    (0, common_1.Controller)('student/infos'),
    (0, swagger_1.ApiTags)('Student infos complementaires'),
    (0, swagger_1.ApiBadRequestResponse)({ status: 400, description: 'bad request response' }),
    (0, swagger_1.ApiForbiddenResponse)({ description: 'Forbidden' }),
    __metadata("design:paramtypes", [student_infos_service_1.StudentInfoService])
], StudentInfoController);
exports.StudentInfoController = StudentInfoController;
//# sourceMappingURL=student.infos.controllers.js.map