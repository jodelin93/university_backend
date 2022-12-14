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
exports.TeachersController = void 0;
const common_1 = require("@nestjs/common");
const teachers_service_1 = require("./teachers.service");
const create_teacher_dto_1 = require("./dto/create-teacher.dto");
const update_teacher_dto_1 = require("./dto/update-teacher.dto");
const swagger_1 = require("@nestjs/swagger");
let TeachersController = class TeachersController {
    constructor(teachersService) {
        this.teachersService = teachersService;
    }
    create(createTeacherDto) {
        return this.teachersService.create(createTeacherDto);
    }
    findAll(page) {
        return this.teachersService.findAll(page, ['person']);
    }
    findFilterAll() {
        return this.teachersService.find(['person']);
    }
    findOne(uuid) {
        return this.teachersService.findOneTeacher(uuid, ['person']);
    }
    update(uuid, updateTeacherDto) {
        return this.teachersService.updateOneTeacher(uuid, updateTeacherDto);
    }
    remove(uuid) {
        return this.teachersService.removeOneTeacher(uuid);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ description: 'this is the endpoint for Creating  a teacher' }),
    (0, swagger_1.ApiCreatedResponse)({
        description: 'The record has been successfully created.',
        type: create_teacher_dto_1.CreateTeacherDto,
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_teacher_dto_1.CreateTeacherDto]),
    __metadata("design:returntype", void 0)
], TeachersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({
        description: 'this is the endpoint for retrieving all the teachers',
    }),
    (0, swagger_1.ApiResponse)({
        type: create_teacher_dto_1.CreateTeacherDto,
        description: 'Operation pour recupperer tous les professeurs',
        isArray: true,
    }),
    __param(0, (0, common_1.Query)('page', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TeachersController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('filter/all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TeachersController.prototype, "findFilterAll", null);
__decorate([
    (0, common_1.Get)(':uuid'),
    (0, swagger_1.ApiParam)({
        name: 'uuid',
        type: 'string',
        description: 'uuid professeur'
    }),
    (0, swagger_1.ApiResponse)({ type: create_teacher_dto_1.CreateTeacherDto }),
    (0, swagger_1.ApiOperation)({
        description: 'this is the endpoint for retrieving  one teacher',
    }),
    __param(0, (0, common_1.Param)('uuid')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TeachersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':uuid'),
    (0, swagger_1.ApiParam)({
        name: 'uuid',
        type: 'string',
        description: 'uuid professeur'
    }),
    (0, swagger_1.ApiCreatedResponse)({
        description: 'The record has been successfully updated.',
        type: create_teacher_dto_1.CreateTeacherDto,
    }),
    __param(0, (0, common_1.Param)('uuid')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_teacher_dto_1.UpdateTeacherDto]),
    __metadata("design:returntype", void 0)
], TeachersController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':uuid'),
    (0, swagger_1.ApiParam)({
        name: 'uuid',
        type: 'string',
        description: 'uuid professeur'
    }),
    (0, swagger_1.ApiOperation)({
        description: 'this is the endpoint for deleting  one teacher',
    }),
    __param(0, (0, common_1.Param)('uuid')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TeachersController.prototype, "remove", null);
TeachersController = __decorate([
    (0, common_1.Controller)('teachers'),
    (0, swagger_1.ApiTags)('Teachers'),
    __metadata("design:paramtypes", [teachers_service_1.TeachersService])
], TeachersController);
exports.TeachersController = TeachersController;
//# sourceMappingURL=teachers.controller.js.map