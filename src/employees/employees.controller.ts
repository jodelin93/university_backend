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
import { EmployeesService } from './employees.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { ApiBadRequestResponse, ApiBody, ApiForbiddenResponse, ApiResponse, ApiTags } from '@nestjs/swagger';
@ApiBadRequestResponse({ status: 400, description: 'bad request response' })
@ApiForbiddenResponse({ description: 'Forbidden' })
@ApiTags('Employees')
@Controller('employees')
export class EmployeesController {
  constructor(private readonly employeesService: EmployeesService) {}

  @Post()
  @ApiBody({ type: CreateEmployeeDto, description: 'Operation pour enregistrer une personne' })
  @ApiResponse({ type:CreateEmployeeDto })
  create(@Body() createEmployeeDto: CreateEmployeeDto) {
    return this.employeesService.create(createEmployeeDto);
  }

  @Get()
  @ApiResponse({type:CreateEmployeeDto, description: 'Operation pour recupperer toutes les personnes', isArray:true})
  findAll(@Query('page') page:number) {
    
    return this.employeesService.findAll(page);
  }

  @Get(':id')
  @ApiResponse({ type: CreateEmployeeDto })
  findOne( @Param('id',ParseIntPipe,)  id: string) {
    return this.employeesService.findOne(+id);
  }

  @Patch(':id')
  @ApiResponse({ type: CreateEmployeeDto })
  update(
    @Param('id',ParseIntPipe) id: string,
    @Body() updateEmployeeDto: UpdateEmployeeDto,
  ) {
    return this.employeesService.update(+id, updateEmployeeDto);
  }

  @Delete(':id',)
  remove(@Param('id',ParseIntPipe) id: string) {
    return this.employeesService.remove(+id);
  }
}
