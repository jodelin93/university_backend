import { AbstracService } from 'src/commons/abstract.service';
import { PersonsService } from 'src/persons/persons.service';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { Roles } from './entities/roles.entity';
import { User } from './entities/user.entity';
import { UpdateUserRoleDto } from './dto/update-user.role.dto';
export declare class UsersService extends AbstracService {
    private personService;
    private userRepo;
    private roleRepo;
    constructor(personService: PersonsService, userRepo: Repository<User>, roleRepo: Repository<Roles>);
    create(createUserDto: CreateUserDto): Promise<User>;
    findOneById(id: number): Promise<User>;
    findOneUser(uuid: string, relations?: any[]): Promise<any>;
    findOneUserByUsername(username: string): Promise<User>;
    updateRoleStudent(uuid: string, updateUserRoleDto: UpdateUserRoleDto): Promise<User>;
    removeOneUser(uuid: string): Promise<any>;
}
