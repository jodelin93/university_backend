import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserRoleDto } from './dto/update-user.role.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: CreateUserDto): Promise<import("./entities/user.entity").User>;
    findAll(): Promise<import("../commons/paginate-result.interface").PaginateResult>;
    findFilterAll(): Promise<any[]>;
    findOne(uuid: string): Promise<any>;
    update(uuid: string, updateUserRoleDto: UpdateUserRoleDto): Promise<import("./entities/user.entity").User>;
    remove(uuid: string): Promise<any>;
}
