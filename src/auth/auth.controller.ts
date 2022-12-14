import { Controller, Post, Body, Res,Req, Get, Request, HttpCode, UseInterceptors, ClassSerializerInterceptor, UseGuards} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';

import { ApiBadRequestResponse, ApiCreatedResponse, ApiForbiddenResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { LocalAuthGuard } from './local-auth-guard';
import { JwtGuard } from './jwt-guard';
@Controller('auth')
@ApiBadRequestResponse({ status: 400, description: 'bad request response' })
  @ApiForbiddenResponse({ description: 'Forbidden' })
  @ApiTags('Auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({ description: 'this is the endpoint for login' })
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: CreateAuthDto,
  })
  @UseGuards(LocalAuthGuard)
  @HttpCode(200)
  @Post('login')
  @UseInterceptors(ClassSerializerInterceptor)
  create(@Request() req,@Res() res) {
    return this.authService.login(req.user,res);
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
  @UseGuards(JwtGuard)
  async test(@Request() req) {
    return req.user;
  }

  // @HttpCode(200)
  // @Post('refresh')
  // async refresh(
  //   @Req() req: Request,
  //   @Res({ passthrough: true }) res: Response,
  // ) {
  //   return this.authService.refresh(req, res);
  // }

  // @Post('logout')
  // logout(@Req() req: Request, @Res({ passthrough: true }) res: Response) {
  //   this.authService.logout(req, res);
  //   return { message: 'log out successfully' };
  // }

}
