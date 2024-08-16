import { DocumentBuilder } from '@nestjs/swagger'

export const openApiConfig = new DocumentBuilder()
  .setTitle('Gourmewoire API')
  .setDescription('API Service for Gourmewoire')
  .setVersion('1.0')
  .build()
