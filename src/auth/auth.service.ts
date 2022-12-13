import { UsersService } from './../users/users.service';
import { PersonsService } from 'src/persons/persons.service';
import { Injectable, BadRequestException } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { Response,Request} from 'express'
import { TokenService } from './token_service';
@Injectable()
export class AuthService {
  constructor(private readonly personService: PersonsService,
    private readonly userService: UsersService,
    private readonly jwtService: JwtService,
    private readonly tokenService:TokenService) { }
  async login(createAuthDto: CreateAuthDto,res: Response) {
    const person = await this.personService.findOnePersonByEmail(createAuthDto.identifiant)
    const user = await this.userService.findOneUserByUsername(createAuthDto.identifiant)
    if (!person  && !user) {
      throw new BadRequestException('bad credentials')
    } 
    const isMatch = await bcrypt.compare(createAuthDto.password, user.password);
    if (!isMatch) {
      throw new BadRequestException('bad credentials')
    }

    const access_token = await this.jwtService.signAsync({ id: user.id }, { expiresIn: '30s' })
    const refreshToken = await this.jwtService.signAsync({ id: user.id });
    res.cookie('refresh_token', refreshToken, {
      httpOnly: true,
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });
    res.cookie('authenticated', true, {
      httpOnly: true,
      maxAge:  24 * 60 * 60 * 1000,
    });
    // eslint-disable-next-line prefer-const
    let expire_date = new Date();

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
