import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { Response, Request } from 'express';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    create(createAuthDto: CreateAuthDto, response: Response): Promise<{
        access_token: string;
    }>;
    user(req: Request): Promise<{
        id: number;
        username: string;
        isActive: boolean;
        personId: number;
        person: import("../persons/entities/person.entity").Person;
        role: import("../users/entities/roles.entity").Roles;
    }>;
    refresh(req: Request, res: Response): Promise<string>;
    logout(req: Request, res: Response): {
        message: string;
    };
}
