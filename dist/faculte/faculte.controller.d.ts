import { FaculteService } from './faculte.service';
import { CreateFaculteDto } from './dto/create-faculte.dto';
import { UpdateFaculteDto } from './dto/update-faculte.dto';
export declare class FaculteController {
    private readonly faculteService;
    constructor(faculteService: FaculteService);
    create(createFaculteDto: CreateFaculteDto): Promise<any>;
    findAll(): Promise<any[]>;
    findOne(id: number): Promise<any>;
    update(id: number, updateFaculteDto: UpdateFaculteDto): Promise<import("./entities/faculte.entity").Faculte>;
    remove(id: number): Promise<any>;
}
