import { AuthService } from './auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    create(req: any, res: any): Promise<{
        access_token: string;
    }>;
    user(req: any): Promise<{
        id: number;
        username: string;
        isActive: boolean;
        personId: number;
        person: import("../persons/entities/person.entity").Person;
        role: import("../users/entities/roles.entity").Roles;
    }>;
    test(req: any): Promise<any>;
}
