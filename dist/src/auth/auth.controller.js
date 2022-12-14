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
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./auth.service");
const create_auth_dto_1 = require("./dto/create-auth.dto");
const swagger_1 = require("@nestjs/swagger");
const local_auth_guard_1 = require("./local-auth-guard");
const jwt_guard_1 = require("./jwt-guard");
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    create(req, res) {
        return this.authService.login(req.user, res);
    }
    async user(req) {
        return this.authService.user(req);
    }
    async test(req) {
        return req.user;
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ description: 'this is the endpoint for login' }),
    (0, swagger_1.ApiCreatedResponse)({
        description: 'The record has been successfully created.',
        type: create_auth_dto_1.CreateAuthDto,
    }),
    (0, common_1.UseGuards)(local_auth_guard_1.LocalAuthGuard),
    (0, common_1.HttpCode)(200),
    (0, common_1.Post)('login'),
    (0, common_1.UseInterceptors)(common_1.ClassSerializerInterceptor),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ description: 'this is the endpoint for having user authenticated' }),
    (0, swagger_1.ApiCreatedResponse)({
        description: 'The record has been successfully created.',
        type: create_auth_dto_1.CreateAuthDto,
    }),
    (0, common_1.Get)('user'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "user", null);
__decorate([
    (0, common_1.Get)('test'),
    (0, common_1.UseGuards)(jwt_guard_1.JwtGuard),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "test", null);
AuthController = __decorate([
    (0, common_1.Controller)('auth'),
    (0, swagger_1.ApiBadRequestResponse)({ status: 400, description: 'bad request response' }),
    (0, swagger_1.ApiForbiddenResponse)({ description: 'Forbidden' }),
    (0, swagger_1.ApiTags)('Auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map