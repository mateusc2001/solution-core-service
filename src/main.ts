import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(
    {
      "origin": "*",
      "methods": "GET,HEAD,PUT,PATCH,POST,DELETE"
    }
  );
  const PORT = process.env.PORT || 3000;
  await app.listen(PORT, () => console.log(`Ambiente rodando na porta ${PORT}`));
}
bootstrap();
