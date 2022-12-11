import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { TypeOrmFilter } from './exceptions/typeorm.exception';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: [
      'http://localhost:3000'
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
    .setDescription('this api is designed for the backend university ')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(process.env.PORT || 5000);
}
bootstrap();
