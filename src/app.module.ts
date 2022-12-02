/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { EmployeesModule } from './employees/employees.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'mocha3034.mochahost.com',
      port: +process.env.DATABASE_PORT,
      username: process.env.DATABASE_USER_PROD,
      password: process.env.DATABASE_PASSWORD_PROD,
      database: process.env.DATABASE_NAME_PROD,
      logging: false,
      autoLoadEntities: true,
      synchronize: true,
    }),
    UsersModule,
    EmployeesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
