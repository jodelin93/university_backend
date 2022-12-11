import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiBody,
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CreateStudentInfoDto } from './dto/create-infos-students.dto';
import { UpdateStudentInfoDto } from './dto/update-infos.student.dto';
import { StudentInfoService } from './student.infos.service';

@Controller('student/infos')
@ApiTags('Student infos complementaires')
@ApiBadRequestResponse({ status: 400, description: 'bad request response' })
@ApiForbiddenResponse({ description: 'Forbidden' })
export class StudentInfoController {
  constructor(private readonly studentInfoService: StudentInfoService) {}
  @Post(':id')
  @ApiOperation({ description: 'this is the endpoint for Creating  a student' })
  @ApiBody({ type: CreateStudentInfoDto })
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: CreateStudentInfoDto,
  })
  @ApiParam({
    name: 'id',
      type: 'number',
    description:'id etudiant'
  }) 
  async create(
    @Param('id', ParseIntPipe) id: number,
    @Body() createStudentInfoDto: CreateStudentInfoDto,
  ) {
    return this.studentInfoService.createinfoStudent(id, createStudentInfoDto);
    }
    
@Get(':id')
  @ApiResponse({ type: CreateStudentInfoDto })
  @ApiOperation({
    description: 'this is the endpoint for retrieving  one student infos',
  })
  findOne(@Param('id',ParseIntPipe) id: number) {
    return this.studentInfoService.findOne(id);
  }

  @Get()
  async find() {
    return await this.studentInfoService.findAll(1, []);
  }

  @Patch(':id')
  @ApiCreatedResponse({
    description: 'The record has been successfully updated.',
    type: UpdateStudentInfoDto,
  })
  @ApiOperation({
    description: 'this is the endpoint for updating  a student infos',
  })
      
  @ApiParam({
    name: 'id',
      type: 'number',
    description:'id de l\'enregistrement'
  }) 
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateStudentInfoDto: UpdateStudentInfoDto,
  ) {
    return this.studentInfoService.updateinfoStudent(id, updateStudentInfoDto);
    }
    
    @Delete(':id')
    @ApiOperation({
      description: 'this is the endpoint for deleting  one student infos',
    })
    remove(@Param('id') id: number) {
      return this.studentInfoService.remove(id);
    }
}