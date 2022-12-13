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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const users_service_1 = require("./../users/users.service");
const persons_service_1 = require("../persons/persons.service");
const common_1 = require("@nestjs/common");
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
    async login(createAuthDto, res) {
        const person = await this.personService.findOnePersonByEmail(createAuthDto.identifiant);
        const user = await this.userService.findOneUserByUsername(createAuthDto.identifiant);
        if (!person && !user) {
            throw new common_1.BadRequestException('bad credentials');
        }
        const isMatch = await bcrypt.compare(createAuthDto.password, user.password);
        if (!isMatch) {
            throw new common_1.BadRequestException('bad credentials');
        }
        const access_token = await this.jwtService.signAsync({ id: user.id }, { expiresIn: '30s' });
        const refreshToken = await this.jwtService.signAsync({ id: user.id });
        res.cookie('refresh_token', refreshToken, {
            httpOnly: true,
            maxAge: 7 * 24 * 60 * 60 * 1000,
        });
        res.cookie('authenticated', true, {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000,
        });
        let expire_date = new Date();
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
    async user(req) {
        const access_token = req.headers.authorization.replace('Bearer', '');
        try {
            const { id } = await this.jwtService.verify(access_token);
            const _a = await this.userService.findOneById(id), { password } = _a, data = __rest(_a, ["password"]);
            return data;
        }
        catch (error) {
            throw new common_1.BadRequestException('Not authorized');
        }
    }
    async refresh(req, res) {
        const refresh_token = req.cookies['refresh_token'];
        try {
            const { id } = await this.jwtService.verify(refresh_token);
            const tokenEntity = await this.tokenService.findOneTOken(id);
            if (!tokenEntity) {
                throw new common_1.BadRequestException('Not authorized Request');
            }
            const access_token = await this.jwtService.signAsync({ id }, { expiresIn: '30s' });
            return `${access_token}`;
        }
        catch (error) {
            throw new common_1.BadRequestException('Not authorized Request');
        }
    }
    async logout(req, res) {
        const refresh_token = req.cookies['refresh_token'];
        this.tokenService.deleteToken(refresh_token);
        res.clearCookie('refresh_token');
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [persons_service_1.PersonsService,
        users_service_1.UsersService,
        jwt_1.JwtService,
        token_service_1.TokenService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map