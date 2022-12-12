import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: CreateUserDto): Promise<import("./entities/user.entity").User>;
    findAll(): Promise<import("../commons/paginate-result.interface").PaginateResult>;
    findOne(id: string): Promise<string>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<string>;
    remove(id: string): Promise<string>;
}
