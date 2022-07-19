import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe} from '@nestjs/common'
const cookieSession = require('cookie-session');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cookieSession({
    keys:['sasa']
  }))
  app.useGlobalPipes(
    new ValidationPipe({
      //garante o envio
      whitelist: false
    }),
  )
  await app.listen(3005);
}
bootstrap();
