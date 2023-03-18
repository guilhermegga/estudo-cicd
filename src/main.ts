import { Logger } from '@nestjs/common/services';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000, () => {
    Logger.log('Rodando na porta 3000')
  });
}
bootstrap();