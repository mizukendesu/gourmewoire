import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface'

export const corsConfig: CorsOptions = {
  credentials: true,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
  optionsSuccessStatus: 204,
  origin: 'http://localhost:3000',
  preflightContinue: false,
}
