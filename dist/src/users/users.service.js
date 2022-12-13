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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const abstract_service_1 = require("../commons/abstract.service");
const persons_service_1 = require("../persons/persons.service");
const typeorm_2 = require("typeorm");
const roles_entity_1 = require("./entities/roles.entity");
const user_entity_1 = require("./entities/user.entity");
const bcrypt = require("bcryptjs");
let UsersService = class UsersService extends abstract_service_1.AbstracService {
    constructor(personService, userRepo, roleRepo) {
        super(userRepo);
        this.personService = personService;
        this.userRepo = userRepo;
        this.roleRepo = roleRepo;
    }
    async create(createUserDto) {
        const person = await this.personService.findOnePersonByEmail(createUserDto.email);
        if (!person) {
            throw new common_1.BadRequestException('email not authorized');
        }
        const personIdsaved = await this.userRepo.findOne({ where: { personId: person.id } });
        const usernamesaved = await this.userRepo.findOne({ where: { username: createUserDto.username } });
        if (personIdsaved || usernamesaved) {
            throw new common_1.BadRequestException('username or user alredy exist');
        }
        const salt = await bcrypt.genSalt();
        const hash = await bcrypt.hash(createUserDto.password, salt);
        const rolesaved = await this.roleRepo.findOne({ where: { role_name: createUserDto.role_name } });
        const user = this.userRepo.create(createUserDto);
        user.password = hash;
        user.person = person;
        if (!rolesaved) {
            const role = new roles_entity_1.Roles();
            role.role_name = createUserDto.role_name;
            this.roleRepo;
            user.role = role;
            return await this.userRepo.save(user);
        }
        user.role = rolesaved;
        return await this.userRepo.save(user);
    }
    async findOneById(id) {
        return await this.userRepo.findOne({ where: { id }, relations: ['person', 'role'] });
    }
    async findOneUser(uuid, relations = []) {
        const person = await this.personService.findOne(uuid);
        return super.findOne({ personId: person.id }, relations);
    }
    async findOneUserByUsername(username) {
        return await this.userRepo.findOne({ where: { username } });
    }
    async updateRoleStudent(uuid, updateUserRoleDto) {
        const oneUser = await this.findOneUser(uuid);
        const id = oneUser.id;
        const rolesaved = await this.roleRepo.findOne({ where: { role_name: updateUserRoleDto.role_name } });
        if (!rolesaved) {
            throw new common_1.BadRequestException('role does not exist');
        }
        await this.userRepo.update(id, { role: rolesaved });
        return await this.userRepo.findOne({
            where: { id },
            relations: ['person', 'role'],
        });
    }
    async removeOneUser(uuid) {
        const student = await this.findOneUser(uuid, ['person']);
        await this.userRepo.remove(student);
        await this.personService.remove(student.uuid);
        return student;
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __param(2, (0, typeorm_1.InjectRepository)(roles_entity_1.Roles)),
    __metadata("design:paramtypes", [persons_service_1.PersonsService,
        typeorm_2.Repository,
        typeorm_2.Repository])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map