import { Controller,Post, Res,Req, Get,Request, UseInterceptors, ClassSerializerInterceptor, UseGuards} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { SetMetadata } from '@nestjs/common';
import { ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { LocalAuthGuard } from './local-auth-guard';
import { IS_PUBLIC_KEY } from './public.decorator';

@Controller('auth')
  @ApiTags('Auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({ description: 'this is the endpoint for login' })
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: CreateAuthDto,
  })
  @UseGuards(LocalAuthGuard)
  @Post('login')
  @SetMetadata(IS_PUBLIC_KEY,true)
  @UseInterceptors(ClassSerializerInterceptor)
  async create(@Request() req) {
    return await this.authService.login(req.user);
  }
  @ApiOperation({ description: 'this is the endpoint for having user authenticated' })
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: CreateAuthDto,
  })

  @Get('user')
  async user(@Request() req) {
    return this.authService.user(req);
  }

  
  @Get('test')
  @SetMetadata(IS_PUBLIC_KEY,true)
  async test(@Req() req) {
    return req.user;
  }

  @Post('refresh')
  async refresh(
    @Req() req,
    @Res({ passthrough: true }) res,
  ) {
    return this.authService.refresh(req, res);
  }

  @Post('logout')
  logout(@Req() req, @Res({ passthrough: true }) res) {
    this.authService.logout(req, res);
    return { message: 'log out successfully' };
  }

}
