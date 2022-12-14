import { UsersService } from './../users/users.service';
import { PersonsService } from 'src/persons/persons.service';
import { Injectable, BadRequestException } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { Response,Request} from 'express'
import { TokenService } from './token_service';
import { User } from 'src/users/entities/user.entity';
@Injectable()
export class AuthService {
  constructor(private readonly personService: PersonsService,
    private readonly userService: UsersService,
    private readonly jwtService: JwtService,
    private readonly tokenService: TokenService) { }
  
  async validateUser(username:string,password:string):Promise<User> {
    const user = await this.userService.findOneUserByUsername(username)
    if ( !user) {
      return null;
    } 
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return null;
    }
   
    return user;
  }

  async login(user: any,res:Response) {
    const payload = { username: user.username, sub: user.id };
    const refreshToken =  this.jwtService.sign(payload);
    const access_token = this.jwtService.sign(payload)

      res.cookie('refresh_token', refreshToken, {
      httpOnly: true,
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });
    // eslint-disable-next-line prefer-const
    let expire_date = new Date();
    expire_date.setDate(expire_date.getDate() + 7);
    expire_date.setDate(expire_date.getDate() + 7);

    await this.tokenService.saveToken({
      user_id: user.id,
      token: refreshToken,
      expire_date,
    });
    
    return {
      access_token
    };
  }

  async user(req: Request) {
    const access_token = req.headers.authorization.replace('Bearer', '');
    try {
          const { id } = await this.jwtService.verify(access_token);
      const { password, ...data } = await this.userService.findOneById(id);
     
      return data;
    } catch (error) {
      throw new BadRequestException('Not authorized');
    }
  }
  async refresh(req: Request, res: Response) {
    const refresh_token = req.cookies['refresh_token'];
    
    try {
      const { id } = await this.jwtService.verify(refresh_token);
      const tokenEntity = await this.tokenService.findOneTOken(id);
      
      if (!tokenEntity) {
        throw new BadRequestException('Not authorized Request');
      }
      const access_token = await this.jwtService.signAsync(
        { id },
        { expiresIn: '30s' },
      );
      return `${access_token}`;
    } catch (error) {
      throw new BadRequestException('Not authorized Request');
    }
  }

  async logout(req: Request, res: Response) {
    const refresh_token = req.cookies['refresh_token'];
    this.tokenService.deleteToken(refresh_token);
    res.clearCookie('refresh_token');
  }

}
