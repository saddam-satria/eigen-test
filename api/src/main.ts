import { NestFactory } from '@nestjs/core';
import { config } from 'dotenv';
import { AllowedIP, PORT } from './config/constant';
import AppModule from './modules/AppModule';
import { SwaggerModule } from '@nestjs/swagger';
import swaggerConfig from './config/swagger';
import { ValidationPipe } from '@nestjs/common';
import { validationPipeOpt } from './config/validationPipe';

(async () => {
  config({
    path: '.env',
  });
  const app = await NestFactory.create(AppModule, { cors: true });
  app.useGlobalPipes(new ValidationPipe(validationPipeOpt));
  app.enableCors({
    origin: AllowedIP,
  });

  const swaggerDocs = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('/api/docs', app, swaggerDocs, {
    jsonDocumentUrl: 'api/docs/json',
    yamlDocumentUrl: 'api/docs/yaml',
  });

  await app.listen(PORT);
})();
