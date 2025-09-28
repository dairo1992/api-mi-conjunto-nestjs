import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);

  // Habilitar CORS
  app.enableCors();

  // Usar pipe de validación global
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Eliminar propiedades que no tienen decoradores
      forbidNonWhitelisted: true, // Lanzar error si se proporcionan valores no permitidos
      transform: true, // Transformar automáticamente los payloads a objetos tipados según sus clases DTO
    }),
  );

  const port = configService.get<number>('PORT') || 3001;
  await app.listen(port);
}
void bootstrap();
