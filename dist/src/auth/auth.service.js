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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("./../users/users.service");
const persons_service_1 = require("../persons/persons.service");
const common_2 = require("@nestjs/common");
const bcrypt = require("bcryptjs");
const jwt_1 = require("@nestjs/jwt");
const token_service_1 = require("./token_service");
let AuthService = class AuthService {
    constructor(personService, userService, jwtService, tokenService) {
        this.personService = personService;
        this.userService = userService;
        this.jwtService = jwtService;
        this.tokenService = tokenService;
    }
    async validateUser(username, password) {
        const user = await this.userService.findOneUserByUsername(username);
        if (!user) {
            return null;
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return null;
        }
        return user;
    }
    async login(user) {
        const payload = { username: user.username, sub: user.id };
        const refreshToken = await this.jwtService.signAsync(payload, { expiresIn: '7d' });
        const access_token = await this.jwtService.signAsync(payload, { expiresIn: '7d' });
        let expire_date = new Date();
        expire_date.setDate(expire_date.getDate() + 7);
        expire_date.setDate(expire_date.getDate() + 7);
        await this.tokenService.saveToken({
            user_id: user.id,
            token: refreshToken,
            expire_date,
        });
        return {
            access_token
        };
    }
    async user(user) {
        const savedUser = await this.userService.findOneById(user.id);
        if (savedUser) {
            return savedUser;
        }
        else {
            throw new common_1.NotFoundException('user not found');
        }
    }
    async refresh(req, res) {
        const refresh_token = req.cookies['refresh_token'];
        if (!refresh_token) {
            return;
        }
        try {
            const { id } = await this.jwtService.verify(refresh_token);
            const tokenEntity = await this.tokenService.findOneTOken(id);
            if (!tokenEntity) {
                throw new common_2.HttpException('Not authorized Request', 401);
            }
            const access_token = await this.jwtService.signAsync({ id }, { expiresIn: '30s' });
            return `${access_token}`;
        }
        catch (error) {
            throw new common_2.HttpException('Not authorized Request', 401);
        }
    }
    async logout(req, res) {
        const refresh_token = req.cookies['refresh_token'];
        this.tokenService.deleteToken(refresh_token);
        res.clearCookie('refresh_token');
    }
};
AuthService = __decorate([
    (0, common_2.Injectable)(),
    __metadata("design:paramtypes", [persons_service_1.PersonsService,
        users_service_1.UsersService,
        jwt_1.JwtService,
        token_service_1.TokenService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map