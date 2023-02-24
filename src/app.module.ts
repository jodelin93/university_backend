/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeesModule } from './employees/employees.module';
import { StudentsModule } from './students/students.module';
import { TeachersModule } from './teachers/teachers.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { CommonModule } from './commons/common.module';
import { FaculteModule } from './faculte/faculte.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'loclhost',
      port: 3306,
      username: 'jodelind_backend',
      password: 'universitybackend',
      database: 'jodelind_university_backend_prod',
      logging: false,
      autoLoadEntities: true,
      synchronize:true
      
    }),
    EmployeesModule,
    StudentsModule,TeachersModule,UsersModule, AuthModule,CommonModule, FaculteModule 
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
