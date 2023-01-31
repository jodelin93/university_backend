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
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("./users.service");
const create_user_dto_1 = require("./dto/create-user.dto");
const swagger_1 = require("@nestjs/swagger");
const update_user_role_dto_1 = require("./dto/update-user.role.dto");
let UsersController = class UsersController {
    constructor(usersService) {
        this.usersService = usersService;
    }
    create(createUserDto) {
        return this.usersService.create(createUserDto);
    }
    findAll() {
        return this.usersService.findAll(1, ['person', 'role']);
    }
    findFilterAll() {
        return this.usersService.find(['person', 'role']);
    }
    findOne(uuid) {
        return this.usersService.findOneUser(uuid, ['person', 'role']);
    }
    update(uuid, updateUserRoleDto) {
        return this.usersService.updateRoleStudent(uuid, updateUserRoleDto);
    }
    remove(uuid) {
        return this.usersService.removeOneUser(uuid);
    }
};
__decorate([
    (0, common_1.UseInterceptors)(common_1.ClassSerializerInterceptor),
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ description: 'this is the endpoint for Creating  a user' }),
    (0, swagger_1.ApiCreatedResponse)({
        description: 'The record has been successfully created.',
        type: create_user_dto_1.CreateUserDto,
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDto]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        description: 'this is the endpoint for retrieving all  users without filter',
    }),
    (0, swagger_1.ApiResponse)({
        type: create_user_dto_1.CreateUserDto,
        description: 'Operation pour recupperer toutes les utilisateurs sans filtrer',
        isArray: true,
    }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        description: 'this is the endpoint for retrieving all  students without filter',
    }),
    (0, swagger_1.ApiResponse)({
        type: create_user_dto_1.CreateUserDto,
        description: 'Operation pour recupperer toutes les etudiants sans filtrer',
        isArray: true,
    }),
    (0, common_1.Get)('filter/all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "findFilterAll", null);
__decorate([
    (0, swagger_1.ApiResponse)({ type: create_user_dto_1.CreateUserDto }),
    (0, swagger_1.ApiOperation)({
        description: 'this is the endpoint for retrieving  one user',
    }),
    (0, common_1.Get)(':uuid'),
    (0, swagger_1.ApiParam)({
        name: 'uuid',
        type: 'string',
        description: 'uuid utilisateur'
    }),
    __param(0, (0, common_1.Param)('uuid')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':uuid'),
    (0, swagger_1.ApiParam)({
        name: 'uuid',
        type: 'string',
        description: 'uuid utilisateur'
    }),
    (0, swagger_1.ApiResponse)({ type: create_user_dto_1.CreateUserDto }),
    (0, swagger_1.ApiOperation)({
        description: 'this is the endpoint for updating  role of a user',
    }),
    __param(0, (0, common_1.Param)('uuid')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_user_role_dto_1.UpdateUserRoleDto]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':uuid'),
    (0, swagger_1.ApiParam)({
        name: 'uuid',
        type: 'string',
        description: 'uuid utilisateur'
    }),
    (0, swagger_1.ApiResponse)({ type: create_user_dto_1.CreateUserDto }),
    (0, swagger_1.ApiOperation)({
        description: 'this is the endpoint for deleting  a user',
    }),
    __param(0, (0, common_1.Param)('uuid')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "remove", null);
UsersController = __decorate([
    (0, swagger_1.ApiTags)('Users'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)('users'),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersController);
exports.UsersController = UsersController;
//# sourceMappingURL=users.controller.js.map