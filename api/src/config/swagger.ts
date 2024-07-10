import { DocumentBuilder } from '@nestjs/swagger';

const swaggerConfig = new DocumentBuilder()
  .setTitle('Eigen Test')
  .setDescription('Eigen Test API Documentation')
  .setVersion('1.0')
  .build();

export default swaggerConfig;
