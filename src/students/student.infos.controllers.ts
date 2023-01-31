import {
  Body,
  Controller,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiBody,
  ApiCreatedResponse,
  ApiOperation,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import { CreateStudentInfoDto } from './dto/create-infos-students.dto';
import { UpdateStudentInfoDto } from './dto/update-infos.student.dto';
import { StudentInfoService } from './student.infos.service';
@ApiBearerAuth()
@Controller('student/infos')
@ApiTags('Student infos complementaires')

export class StudentInfoController {
  constructor(private readonly studentInfoService: StudentInfoService) {}
  @Post(':id')
  @ApiParam({
    name: 'id',
      type: 'number',
    description:'id etudiant'
  })   
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
    
 
  @Patch(':id')
  @ApiParam({
    name: 'id',
      type: 'number',
    description:'id etudiant'
  }) 
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
    
  
}
