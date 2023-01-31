import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    create(createAuthDto: CreateAuthDto, req: any): Promise<{
        access_token: string;
    }>;
    user(req: any): Promise<import("../users/entities/user.entity").User>;
    test(req: any): Promise<any>;
    refresh(req: any, res: any): Promise<string>;
    logout(req: any, res: any): {
        message: string;
    };
}
