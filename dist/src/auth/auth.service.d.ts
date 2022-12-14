import { UsersService } from './../users/users.service';
import { PersonsService } from 'src/persons/persons.service';
import { JwtService } from '@nestjs/jwt';
import { Response, Request } from 'express';
import { TokenService } from './token_service';
import { User } from 'src/users/entities/user.entity';
export declare class AuthService {
    private readonly personService;
    private readonly userService;
    private readonly jwtService;
    private readonly tokenService;
    constructor(personService: PersonsService, userService: UsersService, jwtService: JwtService, tokenService: TokenService);
    validateUser(username: string, password: string): Promise<User>;
    login(user: any): Promise<{
        access_token: string;
    }>;
    user(req: Request): Promise<{
        id: number;
        username: string;
        isActive: boolean;
        personId: number;
        createdAt: Date;
        updatedAt: Date;
        person: import("../persons/entities/person.entity").Person;
        role: import("../users/entities/roles.entity").Roles;
    }>;
    refresh(req: Request, res: Response): Promise<string>;
    logout(req: Request, res: Response): Promise<void>;
}
