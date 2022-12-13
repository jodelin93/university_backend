import { Controller, Post, Body, Res, Get, Req, HttpCode} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { Response,Request} from 'express';
import { ApiBadRequestResponse, ApiCreatedResponse, ApiForbiddenResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
@Controller('auth')
@ApiBadRequestResponse({ status: 400, description: 'bad request response' })
  @ApiForbiddenResponse({ description: 'Forbidden' })
  @ApiTags('Auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @ApiOperation({ description: 'this is the endpoint for login' })
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: CreateAuthDto,
  })
  create(@Body() createAuthDto: CreateAuthDto, @Res({ passthrough: true }) response: Response) {
    return this.authService.login(createAuthDto,response);
  }
  @ApiOperation({ description: 'this is the endpoint for having user authenticated' })
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: CreateAuthDto,
  })
  @Get('user')
  async user(@Req() req: Request) {
    return this.authService.user(req);
  }

  @HttpCode(200)
  @Post('refresh')
  async refresh(
    @Req() req: Request,
    @Res({ passthrough: true }) res: Response,
  ) {
    return this.authService.refresh(req, res);
  }

  @Post('logout')
  logout(@Req() req: Request, @Res({ passthrough: true }) res: Response) {
    this.authService.logout(req, res);
    return { message: 'log out successfully' };
  }

}
