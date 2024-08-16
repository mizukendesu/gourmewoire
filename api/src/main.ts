import { NestFactory } from '@nestjs/core'
import { corsConfig } from 'src/cors.config'

import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: corsConfig,
  })
  await app.listen(8080)
}
bootstrap()
