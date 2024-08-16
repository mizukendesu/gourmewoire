import { Module } from '@nestjs/common'

import { AppController } from './app.controller'
import { AppService } from './app.service'
import { PostsModule } from './posts/posts.module';

@Module({
  controllers: [AppController],
  imports: [PostsModule],
  providers: [AppService],
})
export class AppModule {}
