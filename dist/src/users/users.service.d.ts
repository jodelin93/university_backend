import { AbstracService } from 'src/commons/abstract.service';
import { PersonsService } from 'src/persons/persons.service';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Roles } from './entities/roles.entity';
import { User } from './entities/user.entity';
export declare class UsersService extends AbstracService {
    private personService;
    private userRepo;
    private roleRepo;
    constructor(personService: PersonsService, userRepo: Repository<User>, roleRepo: Repository<Roles>);
    create(createUserDto: CreateUserDto): Promise<User>;
    findOne(id: number): Promise<string>;
    update(id: number, updateUserDto: UpdateUserDto): Promise<string>;
    remove(id: number): Promise<string>;
}
