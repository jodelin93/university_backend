import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, ClassSerializerInterceptor, HttpCode } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiBadRequestResponse, ApiBearerAuth, ApiCreatedResponse, ApiForbiddenResponse, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UpdateUserRoleDto } from './dto/update-user.role.dto';

@ApiTags('Users')
@ApiBearerAuth()
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @UseInterceptors(ClassSerializerInterceptor)
  @Post()
  @ApiOperation({ description: 'this is the endpoint for Creating  a user' })
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: CreateUserDto,
  })
    
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }
  @ApiOperation({
    description: 'this is the endpoint for retrieving all  users without filter',
  })
  @ApiResponse({
    type: CreateUserDto,
    description: 'Operation pour recupperer toutes les utilisateurs sans filtrer',
    isArray: true,
  })
  @Get()
  findAll() {
    return this.usersService.findAll(1,['person','role']);
  }
  @ApiOperation({
    description: 'this is the endpoint for retrieving all  students without filter',
  })
  @ApiResponse({
    type: CreateUserDto,
    description: 'Operation pour recupperer toutes les etudiants sans filtrer',
    isArray: true,
  })
  @Get('filter/all')
  findFilterAll() {
    return this.usersService.find(['person','role']);
  }

  @ApiResponse({ type: CreateUserDto })
  @ApiOperation({
    description: 'this is the endpoint for retrieving  one user',
  })
  @Get(':uuid')
  @ApiParam({
    name: 'uuid',
      type: 'string',
    description:'uuid utilisateur'
  })
  findOne(@Param('uuid') uuid: string) {
    return this.usersService.findOneUser(uuid,['person','role']);
  }

  @Patch(':uuid')
  @ApiParam({
    name: 'uuid',
      type: 'string',
    description:'uuid utilisateur'
  })
  @ApiResponse({ type: CreateUserDto })
  @ApiOperation({
    description: 'this is the endpoint for updating  role of a user',
  })
  update(@Param('uuid') uuid: string, @Body() updateUserRoleDto: UpdateUserRoleDto) {
    return this.usersService.updateRoleStudent(uuid, updateUserRoleDto);
  }

  @Delete(':uuid')
  @ApiParam({
    name: 'uuid',
      type: 'string',
    description:'uuid utilisateur'
  })
  @ApiResponse({ type: CreateUserDto })
  @ApiOperation({
    description: 'this is the endpoint for deleting  a user',
  })
  remove(@Param('uuid') uuid: string) {
    return this.usersService.removeOneUser(uuid);
  }
}
