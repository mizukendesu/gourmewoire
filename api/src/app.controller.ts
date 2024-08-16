import { Controller, Get } from '@nestjs/common'
import { ApiProduces, ApiTags } from '@nestjs/swagger'

@Controller()
@ApiTags('/')
@ApiProduces('application/json; charset=utf-8')
export class AppController {
  @Get('/health')
  health(): string {
    return 'OK'
  }
}
