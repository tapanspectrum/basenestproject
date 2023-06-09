import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // swagger added
  const config = new DocumentBuilder()
  .setTitle('Rest API Project')
  .setDescription('This is REST API Using NEST JS')
  .setVersion('1.0')
  .addTag('Auth')
  .build();
const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT);
}
bootstrap();
