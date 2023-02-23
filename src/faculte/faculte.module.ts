import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { FaculteService } from './faculte.service';
import { FaculteController } from './faculte.controller';
import { Faculte } from './entities/faculte.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Faculte])],
  controllers: [FaculteController],
  providers: [FaculteService]
})
export class FaculteModule {}
