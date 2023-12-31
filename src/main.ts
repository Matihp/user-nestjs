import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import * as morgan from 'morgan';
import { CORS } from './constants';
import { ClassSerializerInterceptor, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(morgan('dev'));
  
  app.useGlobalPipes(new ValidationPipe({
    transformOptions:{
      enableImplicitConversion:true,
    }
  }))
  const reflector= app.get(Reflector)
  app.useGlobalInterceptors(new ClassSerializerInterceptor(reflector))

  const config = app.get(ConfigService);

  app.enableCors(CORS);

  app.setGlobalPrefix('api');

  await app.listen(config.get('PORT'));
  console.log(`Application running on: ${await app.getUrl()}`)
}
bootstrap();
