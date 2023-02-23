import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { FaculteService } from './faculte.service';
import { CreateFaculteDto } from './dto/create-faculte.dto';
import { UpdateFaculteDto } from './dto/update-faculte.dto';
import { ApiBearerAuth, ApiCreatedResponse, ApiOperation, ApiParam, ApiResponse } from '@nestjs/swagger';


@ApiBearerAuth()
@Controller('faculte')
export class FaculteController {
  constructor(private readonly faculteService: FaculteService) {}

  @Post()
  @ApiOperation({ description: 'this is the endpoint for Creating  a faculte' })
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: CreateFaculteDto,
  })
  create(@Body() createFaculteDto: CreateFaculteDto) {
    return this.faculteService.create(createFaculteDto);
  }

  @Get()
  @ApiOperation({
    description: 'this is the endpoint for retrieving all  faculte',
  })
  @ApiResponse({
    type: CreateFaculteDto,
    description: 'Operation pour recupperer toutes les faculte',
    isArray: true,
  })
  findAll() {
    return this.faculteService.find();
  }

  @Get(':id')
  @ApiParam({
    name: 'id',
      type: 'number',
    description:'id faculte'
  })
  @ApiResponse({ type: CreateFaculteDto })
  @ApiOperation({
    description: 'this is the endpoint for retrieving  one faculte',
  })
  findOne(@Param('id',ParseIntPipe) id: number) {
    return this.faculteService.findOne(id);
  }

  @Patch(':id')
  @ApiParam({
    name: 'id',
      type: 'number',
    description:'id faculte'
  })
  @ApiCreatedResponse({
    description: 'The record has been successfully updated.',
    type: CreateFaculteDto,
  })
  @ApiOperation({ description: 'this is the endpoint for updating  a faculte' })
  update(@Param('id', ParseIntPipe) id: number, @Body() updateFaculteDto: UpdateFaculteDto) {

    return this.faculteService.update(id, updateFaculteDto);
  }

  @Delete(':id')
  @ApiParam({
    name: 'id',
      type: 'number',
    description:'id faculte'
  })
  @ApiOperation({
    description: 'this is the endpoint for deleting  one faculte',
  })
  remove(@Param('id',ParseIntPipe) id: number) {
    return this.faculteService.remove(id);
  }
}
