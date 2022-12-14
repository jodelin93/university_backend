import { AuthService } from './auth.service';
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { User } from 'src/users/entities/user.entity';


@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    
    constructor(private readonly authService: AuthService) {
        super({usernameField:'username'})
     }
   
    async validate(username: string, password: string):Promise<User> {
        const user = this.authService.validateUser(username, password)
        
        if (!user) {
            throw new UnauthorizedException()
        }
        return user;
    }
}