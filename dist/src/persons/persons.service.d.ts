import { Repository } from 'typeorm';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
import { Person } from './entities/person.entity';
export declare class PersonsService {
    private personRepo;
    constructor(personRepo: Repository<Person>);
    create(createPersonDto: CreatePersonDto): Promise<CreatePersonDto & Person>;
    findAll(): string;
    findOne(id: number): Promise<Person>;
    update(id: number, updatePersonDto: UpdatePersonDto): Promise<Person>;
    remove(id: number): Promise<Person>;
}
