import { PersonsModule } from './../persons/persons.module';
import { Roles } from './entities/roles.entity';
import { User } from './entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';

@Module({
  imports:[TypeOrmModule.forFeature([User,Roles]),PersonsModule],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
