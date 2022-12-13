import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";

@Injectable()
export class JwtAuthGuard implements CanActivate {
    

    async canActivate(context: ExecutionContext) {
    
        const req = context.switchToHttp().getRequest()
        console.log(req.cookies.authenticated);
        
        if (req.cookies.authenticated) {

           return  true
        }else{
            return false
        }
        
        return true;
  }
}
