import { Module } from '@nestjs/common'
import { AppService } from 'src/app.service'

import { AppController } from './app.controller'
import { PostsModule } from './posts/posts.module'

@Module({
  controllers: [AppController],
  imports: [PostsModule],
  providers: [AppService],
})
export class AppModule {}
