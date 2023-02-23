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
exports.FaculteService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const abstract_service_1 = require("../commons/abstract.service");
const typeorm_2 = require("typeorm");
const faculte_entity_1 = require("./entities/faculte.entity");
let FaculteService = class FaculteService extends abstract_service_1.AbstracService {
    constructor(faculteRepo) {
        super(faculteRepo);
        this.faculteRepo = faculteRepo;
    }
    async create(createFaculteDto) {
        const faculte = await this.faculteRepo.findOne({ where: { nom_faculte: createFaculteDto.nom_faculte } });
        if (faculte) {
            throw new common_1.BadRequestException("Faculte Existante");
        }
        return await this.faculteRepo.save(createFaculteDto);
    }
    async find() {
        return await super.find();
    }
    async findOne(id) {
        return await super.findOne({ id });
    }
    async update(id, faculteRepo) {
        const faculte = await this.faculteRepo.preload(Object.assign({ id }, faculteRepo));
        return await this.faculteRepo.save(faculte);
    }
    async remove(id) {
        return await super.remove(id);
    }
};
FaculteService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(faculte_entity_1.Faculte)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], FaculteService);
exports.FaculteService = FaculteService;
//# sourceMappingURL=faculte.service.js.map