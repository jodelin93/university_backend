import { AbstracService } from 'src/commons/abstract.service';
import { Repository } from 'typeorm';
import { UpdateFaculteDto } from './dto/update-faculte.dto';
import { Faculte } from './entities/faculte.entity';
export declare class FaculteService extends AbstracService {
    private faculteRepo;
    constructor(faculteRepo: Repository<Faculte>);
    create(createFaculteDto: any): Promise<any>;
    find(): Promise<any[]>;
    findOne(id: number): Promise<any>;
    update(id: number, faculteRepo: UpdateFaculteDto): Promise<Faculte>;
    remove(id: number): Promise<any>;
}
