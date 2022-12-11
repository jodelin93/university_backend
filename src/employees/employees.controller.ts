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
import { ApiBadRequestResponse, ApiCreatedResponse, ApiForbiddenResponse, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiBadRequestResponse({ status: 400, description: 'bad request response' })
@ApiForbiddenResponse({ description: 'Forbidden' })
@ApiTags('Employees')
@Controller('employees')
export class EmployeesController {
  constructor(private readonly employeesService: EmployeesService) {}

  @Post()
  @ApiOperation({ description: "this is the endpoint for Creating  an employee" })
  @ApiCreatedResponse({ description: 'The record has been successfully created.',type:CreateEmployeeDto})
  create(@Body() createEmployeeDto: CreateEmployeeDto) {
    return this.employeesService.create(createEmployeeDto);
  }

  @Get()
  @ApiOperation({ description: "this is the endpoint for retrieving all the employees" })
  @ApiResponse({type:CreateEmployeeDto, description: 'Operation pour recupperer toutes les personnes', isArray:true})
  findAll(@Query('page',ParseIntPipe) page?:number) {
    return this.employeesService.findAll(page,['person']);
  }

  @Get(':id')
  @ApiResponse({ type: CreateEmployeeDto })
  @ApiOperation({ description: "this is the endpoint for retrieving  one employee" })
  findOne( @Param('id',)  uuid: string) {
    return this.employeesService.findOneEmployee(uuid,['person']);
  }

  @Patch(':id')
  @ApiCreatedResponse({ description: 'The record has been successfully updated.',type:CreateEmployeeDto})
  @ApiOperation({ description: "this is the endpoint for updating  an employee" })
  update(
    @Param('id') uuid: string,
    @Body() updateEmployeeDto: UpdateEmployeeDto,
  ) {
    return this.employeesService.updateOneEmployee(uuid, updateEmployeeDto);
  }

  @Delete(':id',)
  @ApiOperation({ description: "this is the endpoint for deleting  one employee" })
  remove(@Param('id') uuid: string) {
    return this.employeesService.removeOneEmployee(uuid);
  }


}
