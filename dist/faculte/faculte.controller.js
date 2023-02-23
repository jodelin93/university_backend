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
exports.FaculteController = void 0;
const common_1 = require("@nestjs/common");
const faculte_service_1 = require("./faculte.service");
const create_faculte_dto_1 = require("./dto/create-faculte.dto");
const update_faculte_dto_1 = require("./dto/update-faculte.dto");
const swagger_1 = require("@nestjs/swagger");
let FaculteController = class FaculteController {
    constructor(faculteService) {
        this.faculteService = faculteService;
    }
    create(createFaculteDto) {
        return this.faculteService.create(createFaculteDto);
    }
    findAll() {
        return this.faculteService.find();
    }
    findOne(id) {
        return this.faculteService.findOne(id);
    }
    update(id, updateFaculteDto) {
        return this.faculteService.update(id, updateFaculteDto);
    }
    remove(id) {
        return this.faculteService.remove(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ description: 'this is the endpoint for Creating  a faculte' }),
    (0, swagger_1.ApiCreatedResponse)({
        description: 'The record has been successfully created.',
        type: create_faculte_dto_1.CreateFaculteDto,
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_faculte_dto_1.CreateFaculteDto]),
    __metadata("design:returntype", void 0)
], FaculteController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({
        description: 'this is the endpoint for retrieving all  faculte',
    }),
    (0, swagger_1.ApiResponse)({
        type: create_faculte_dto_1.CreateFaculteDto,
        description: 'Operation pour recupperer toutes les faculte',
        isArray: true,
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FaculteController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiParam)({
        name: 'id',
        type: 'number',
        description: 'id faculte'
    }),
    (0, swagger_1.ApiResponse)({ type: create_faculte_dto_1.CreateFaculteDto }),
    (0, swagger_1.ApiOperation)({
        description: 'this is the endpoint for retrieving  one faculte',
    }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], FaculteController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiParam)({
        name: 'id',
        type: 'number',
        description: 'id faculte'
    }),
    (0, swagger_1.ApiCreatedResponse)({
        description: 'The record has been successfully updated.',
        type: create_faculte_dto_1.CreateFaculteDto,
    }),
    (0, swagger_1.ApiOperation)({ description: 'this is the endpoint for updating  a faculte' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_faculte_dto_1.UpdateFaculteDto]),
    __metadata("design:returntype", void 0)
], FaculteController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiParam)({
        name: 'id',
        type: 'number',
        description: 'id faculte'
    }),
    (0, swagger_1.ApiOperation)({
        description: 'this is the endpoint for deleting  one faculte',
    }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], FaculteController.prototype, "remove", null);
FaculteController = __decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)('faculte'),
    __metadata("design:paramtypes", [faculte_service_1.FaculteService])
], FaculteController);
exports.FaculteController = FaculteController;
//# sourceMappingURL=faculte.controller.js.map