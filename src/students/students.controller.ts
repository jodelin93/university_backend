
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  Query,
} from '@nestjs/common';
import { StudentsService } from './students.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiNotFoundResponse,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiBearerAuth()
@Controller('students')

@ApiTags('Students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}
  @Post()
  @ApiOperation({ description: 'this is the endpoint for Creating  a student' })
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: CreateStudentDto,
  })
  create(@Body() createStudentDto: CreateStudentDto) {
    return this.studentsService.create(createStudentDto);
  }
  @Get()
  @ApiOperation({
    description: 'this is the endpoint for retrieving all  students',
  })
  @ApiResponse({
    type: CreateStudentDto,
    description: 'Operation pour recupperer toutes les etudiants',
    isArray: true,
  })
  findAll(@Query('page', ParseIntPipe) page?: number) {
    return this.studentsService.findAll(page, ['person', 'studentinfos']);
  }

  @Get('filter/all')
  @ApiOperation({
    description: 'this is the endpoint for retrieving all  students without filter',
  })
  @ApiResponse({
    type: CreateStudentDto,
    description: 'Operation pour recupperer toutes les etudiants sans filtrer',
    isArray: true,
  })
  findFilterAll() {
    return this.studentsService.find(['person']);
  }

  @Get(':uuid')
  @ApiParam({
    name: 'uuid',
      type: 'string',
    description:'uuid etudiant'
  })
  @ApiResponse({ type: CreateStudentDto })
  @ApiOperation({
    description: 'this is the endpoint for retrieving  one student',
  })
  findOne(@Param('uuid') uuid: string) {
    return this.studentsService.findOneStudent(uuid, [
      'person',
      'studentinfos',
    ]);
  }

  @Patch(':uuid')
  @ApiParam({
    name: 'uuid',
      type: 'string',
    description:'uuid etudiant'
  })
  @ApiCreatedResponse({
    description: 'The record has been successfully updated.',
    type: CreateStudentDto,
  })
  @ApiOperation({ description: 'this is the endpoint for updating  a student' })
  update(
    @Param('uuid') uuid: string,
    @Body() updateStudentDto: UpdateStudentDto,
  ) {
    return this.studentsService.updateOneStudent(uuid, updateStudentDto);
  }

  @Delete(':uuid')
  @ApiParam({
    name: 'uuid',
      type: 'string',
    description:'uuid etudiant'
  })
  @ApiOperation({
    description: 'this is the endpoint for deleting  one student',
  })
  remove(@Param('uuid') uuid: string) {
    return this.studentsService.removeOneStudent(uuid);
  }
}
