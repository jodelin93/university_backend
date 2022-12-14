import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  ParseIntPipe,
  HttpCode,
} from '@nestjs/common';
import { TeachersService } from './teachers.service';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@Controller('teachers')
@ApiBadRequestResponse({ status: 400, description: 'bad request response' })
@ApiForbiddenResponse({ description: 'Forbidden' })
@ApiTags('Teachers')
export class TeachersController {
  constructor(private readonly teachersService: TeachersService) { }
  
  @HttpCode(200)
  @Post()
  @ApiOperation({ description: 'this is the endpoint for Creating  a teacher' })
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: CreateTeacherDto,
  })
  create(@Body() createTeacherDto: CreateTeacherDto) {
    return this.teachersService.create(createTeacherDto);
  }

  @Get()
  @ApiOperation({
    description: 'this is the endpoint for retrieving all the teachers',
  })
  @ApiResponse({
    type: CreateTeacherDto,
    description: 'Operation pour recupperer tous les professeurs',
    isArray: true,
  })
  findAll(@Query('page', ParseIntPipe) page?: number) {
    return this.teachersService.findAll(page, ['person']);
  }

  @Get('filter/all')
  findFilterAll() {
    return this.teachersService.find(['person']);
  }

  @Get(':uuid')
  @ApiParam({
    name: 'uuid',
      type: 'string',
    description:'uuid professeur'
  })
  @ApiResponse({ type: CreateTeacherDto })
  @ApiOperation({
    description: 'this is the endpoint for retrieving  one teacher',
  })
  findOne(@Param('uuid') uuid: string) {
    return this.teachersService.findOneTeacher(uuid, ['person']);
  }

  @Patch(':uuid')
  @ApiParam({
    name: 'uuid',
      type: 'string',
    description:'uuid professeur'
  })
  @ApiCreatedResponse({
    description: 'The record has been successfully updated.',
    type: CreateTeacherDto,
  })
  update(
    @Param('uuid') uuid: string,
    @Body() updateTeacherDto: UpdateTeacherDto,
  ) {
    return this.teachersService.updateOneTeacher(uuid, updateTeacherDto);
  }

  @Delete(':uuid')
  @ApiParam({
    name: 'uuid',
      type: 'string',
    description:'uuid professeur'
  })
  @ApiOperation({
    description: 'this is the endpoint for deleting  one teacher',
  })
  remove(@Param('uuid') uuid: string) {
    return this.teachersService.removeOneTeacher(uuid);
  }
}
