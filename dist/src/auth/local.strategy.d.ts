import { AuthService } from './auth.service';
import { Strategy } from "passport-local";
import { User } from 'src/users/entities/user.entity';
declare const LocalStrategy_base: new (...args: any[]) => Strategy;
export declare class LocalStrategy extends LocalStrategy_base {
    private readonly authService;
    constructor(authService: AuthService);
    validate(username: string, password: string): Promise<User>;
}
export {};
