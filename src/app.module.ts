/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeesModule } from './employees/employees.module';
import { StudentsModule } from './students/students.module';
import { TeachersModule } from './teachers/teachers.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: +process.env.DATABASE_PORT,
      username: process.env.DATABASE_USER_PROD,
      password: process.env.DATABASE_PASSWORD_PROD,
      database: process.env.DATABASE_NAME_PROD,
      logging: false,
      autoLoadEntities: true,
      synchronize: true,
    }),
    EmployeesModule,
    StudentsModule,TeachersModule,UsersModule, AuthModule, 
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
