import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { TypeOrmFilter } from './exceptions/typeorm.exception';
import * as CookParser from 'cookie-parser'
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(CookParser())
  app.enableCors({
    origin: [
      'https://app.ujeph.edu.ht/','https://app.ujeph.edu.ht'
    ],
    methods: ["GET", "POST","PATCH",'DELETE'],
    credentials: true,
  });

  app.setGlobalPrefix('/v1/api');
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      forbidUnknownValues: true,
    }),
  );

  app.useGlobalFilters(new TypeOrmFilter())
  
  const config = new DocumentBuilder()
    .setTitle('Api for the backend university ')
    .setDescription(`
    this api is designed for the backend university 
    CREATED RESSOURCE: 201
    RETRIEVE RESOURCE: 200
    NOT FOUND RESOURCE:404
    BAD REQUEST :      400
    FORBIDEN RESOURCE :401
    `)
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(process.env.PORT || 5000);
}
bootstrap();
