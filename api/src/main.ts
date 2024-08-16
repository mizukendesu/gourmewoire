import { ClassSerializerInterceptor, ValidationPipe } from '@nestjs/common'
import { NestFactory, Reflector } from '@nestjs/core'
import { SwaggerModule } from '@nestjs/swagger'
import { corsConfig } from 'src/cors.config'
import { openApiConfig } from 'src/openapi.config'

import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: corsConfig,
  })
  app.useGlobalPipes(new ValidationPipe({ transform: true }))
  app.useGlobalInterceptors(
    new ClassSerializerInterceptor(app.get(Reflector), {
      excludeExtraneousValues: true,
    }),
  )

  const document = SwaggerModule.createDocument(app, openApiConfig)
  SwaggerModule.setup('api', app, document)

  await app.listen(8080)
}
bootstrap()
