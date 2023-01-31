import { UsersService } from './../users/users.service';
import { JwtService } from '@nestjs/jwt';
export declare class JwtParentGuard {
    protected readonly jwtService: JwtService;
    protected readonly userService: UsersService;
    constructor(jwtService: JwtService, userService: UsersService);
}
