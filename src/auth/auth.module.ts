import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './../users/users.module';
import { PersonsModule } from './../persons/persons.module';
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';
import { TokenEntity } from './entities/token.entity';
import { TokenService } from './token_service';
import { LocalStrategy } from './local.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';


@Module({
  imports:[ ConfigModule.forRoot({ isGlobal: true }),TypeOrmModule.forFeature([TokenEntity]),PassportModule, JwtModule.register({
    secret: process.env.JWT_SECRET,
  }), PersonsModule,UsersModule],
  controllers: [AuthController],
  providers: [AuthService,TokenService,LocalStrategy,JwtStrategy]
})
export class AuthModule {}
