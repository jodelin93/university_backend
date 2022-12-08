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
exports.EmployeesService = void 0;
const persons_service_1 = require("./../persons/persons.service");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const employee_entity_1 = require("./entities/employee.entity");
const typeorm_2 = require("typeorm");
const abstract_service_1 = require("./../commons/abstract.service");
let EmployeesService = class EmployeesService extends abstract_service_1.AbstracService {
    constructor(personService, empRepo) {
        super(empRepo);
        this.personService = personService;
        this.empRepo = empRepo;
    }
    async create(createEmployeeDto) {
        const emp = this.empRepo.create(createEmployeeDto);
        const person = await this.personService.create(createEmployeeDto);
        emp.person = person;
        return await this.empRepo.save(emp);
    }
    async findOneEmployee(uuid, relations = []) {
        const emp = await this.personService.findOne(uuid);
        return super.findOne({ personId: emp.id }, relations);
    }
    async updateOneEmployee(uuid, updateEmployeeDto) {
        const oneEmployee = await this.findOneEmployee(uuid);
        const id = oneEmployee.id;
        const emp = await this.empRepo.preload(Object.assign({ id }, updateEmployeeDto));
        await this.personService.update(uuid, updateEmployeeDto);
        const updateEmp = await this.empRepo.save(emp);
        return await this.empRepo.findOne({ where: { id: updateEmp.id }, relations: ['person'] });
    }
    async removeOneEmployee(uuid) {
        const employee = await this.findOneEmployee(uuid, ['person']);
        await this.empRepo.remove(employee);
        await this.personService.remove(employee.uuid);
        return employee;
    }
};
EmployeesService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, typeorm_1.InjectRepository)(employee_entity_1.Employee)),
    __metadata("design:paramtypes", [persons_service_1.PersonsService,
        typeorm_2.Repository])
], EmployeesService);
exports.EmployeesService = EmployeesService;
//# sourceMappingURL=employees.service.js.map