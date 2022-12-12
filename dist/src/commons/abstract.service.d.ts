import { Repository } from "typeorm";
import { PaginateResult } from "./paginate-result.interface";
export declare abstract class AbstracService {
    private readonly repository;
    protected constructor(repository: Repository<any>);
    create(data: any): Promise<any>;
    find(relations?: any[]): Promise<any[]>;
    findAll(page: number, relations?: any[]): Promise<PaginateResult>;
    findOne(condition: any, relations?: any[]): Promise<any>;
    update(id: number, data: any): Promise<any>;
    remove(id: number): Promise<any>;
}
