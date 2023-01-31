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
exports.AbstracService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
let AbstracService = class AbstracService {
    constructor(repository) {
        this.repository = repository;
    }
    async create(data) {
        return await this.repository.save(data);
    }
    async find(relations = []) {
        return await this.repository.find({ relations, order: { createdAt: 'desc' } });
    }
    async findAll(page, relations = []) {
        const take = 15;
        if (page === 0 || !page) {
            page = 1;
        }
        const [data, total] = await this.repository.findAndCount({
            take,
            skip: (page - 1) * take,
            relations, order: { createdAt: 'desc' }
        });
        return {
            data,
            meta: {
                total,
                CurrentPage: page,
                nextPage: page + 1,
                previousPage: Math.ceil(page - 1),
                firstPaginate: 1,
                lastPaginate: Math.ceil(total / take),
            },
        };
    }
    async findOne(condition, relations = []) {
        const data = await this.repository.findOne({
            where: condition,
            relations,
        });
        if (!data) {
            throw new common_1.NotFoundException(`data not found`);
        }
        return data;
    }
    async update(id, data) {
        const findData = await this.findOne({ id });
        if (!findData) {
            throw new common_1.NotFoundException(`data not found`);
        }
        const convertData = Object.assign(findData, data);
        await this.repository.update(id, data);
        return convertData;
    }
    async remove(id) {
        const data = await this.findOne({ id });
        if (!data) {
            throw new common_1.NotFoundException(`data not found`);
        }
        await this.repository.delete(id);
        return data;
    }
};
AbstracService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], AbstracService);
exports.AbstracService = AbstracService;
//# sourceMappingURL=abstract.service.js.map