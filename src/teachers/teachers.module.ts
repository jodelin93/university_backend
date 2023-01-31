import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonsModule } from './../persons/persons.module';
import { Module } from '@nestjs/common';
import { TeachersService } from './teachers.service';
import { TeachersController } from './teachers.controller';
import { Teacher } from './entities/teacher.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Teacher]), PersonsModule],
  controllers: [TeachersController],
  providers: [TeachersService],
})
export class TeachersModule {}
