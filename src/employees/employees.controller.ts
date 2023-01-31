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
} from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('Employees')
@ApiBearerAuth()
@Controller('employees')
export class EmployeesController {
  constructor(private readonly employeesService: EmployeesService) {}
  @Post()
  @ApiOperation({
    description: 'this is the endpoint for Creating  an employee',
  })
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: CreateEmployeeDto,
  })
  create(@Body() createEmployeeDto: CreateEmployeeDto) {
    return this.employeesService.create(createEmployeeDto);
  }

  @Get()
  @ApiOperation({
    description: 'this is the endpoint for retrieving all the employees',
  })
  @ApiResponse({
    type: CreateEmployeeDto,
    description: 'Operation pour recupperer toutes les personnes',
    isArray: true,
  })
  findAll(@Query('page', ParseIntPipe) page?: number) {
    return this.employeesService.findAll(page, ['person']);
  }
  @ApiOperation({
    description:
      'this is the endpoint for retrieving all  employee without filter',
  })
  @ApiResponse({
    type: CreateEmployeeDto,
    description: 'Operation pour recupperer tous les utilisateurs sans filtrer',
    isArray: true,
  })
  @Get('filter/all')
  findFilterAll() {
    return this.employeesService.find(['person']);
  }

  @Get(':uuid')
  @ApiParam({
    name: 'uuid',
    type: 'string',
    description: 'uuid employe',
  })
  @ApiResponse({ type: CreateEmployeeDto })
  @ApiOperation({
    description: 'this is the endpoint for retrieving  one employee',
  })
  findOne(@Param('uuid') uuid: string) {
    return this.employeesService.findOneEmployee(uuid, ['person']);
  }

  @Patch(':uuid')
  @ApiParam({
    name: 'uuid',
    type: 'string',
    description: 'uuid employe',
  })
  @ApiCreatedResponse({
    description: 'The record has been successfully updated.',
    type: CreateEmployeeDto,
  })
  @ApiOperation({
    description: 'this is the endpoint for updating  an employee',
  })
  update(
    @Param('uuid') uuid: string,
    @Body() updateEmployeeDto: UpdateEmployeeDto,
  ) {
    return this.employeesService.updateOneEmployee(uuid, updateEmployeeDto);
  }

  @Delete(':uuid')
  @ApiParam({
    name: 'uuid',
    type: 'string',
    description: 'uuid employe',
  })
  @ApiOperation({
    description: 'this is the endpoint for deleting  one employee',
  })
  remove(@Param('uuid') uuid: string) {
    return this.employeesService.removeOneEmployee(uuid);
  }
}
