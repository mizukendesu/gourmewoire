import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post as PostMethod,
} from '@nestjs/common'
import { ApiProduces, ApiTags } from '@nestjs/swagger'
import { Swagger } from 'src/decorators/swagger.decorator'
import { Post } from 'src/posts/entities/post.entity'

import { CreatePostDto } from './dto/create-post.dto'
import { UpdatePostDto } from './dto/update-post.dto'
import { PostsService } from './posts.service'

@Controller('posts')
@ApiTags('/posts')
@ApiProduces('application/json; charset=utf-8')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @PostMethod()
  @Swagger({
    params: { name: 'createPostDto', type: CreatePostDto },
    responseDescription: '作成したポストを返却',
    status: 201,
    summary: 'ポストを作成する',
    type: Post,
  })
  async create(@Body() createPostDto: CreatePostDto) {
    const post = await this.postsService.create(createPostDto)
    return new Post(post)
  }

  @Get()
  @Swagger({
    isArray: true,
    responseDescription: '全てのポストを返却',
    status: 200,
    summary: '全てのポストを取得する',
    type: Post,
  })
  async findAll() {
    const posts = await this.postsService.findAll()
    return posts.map((post) => new Post(post))
  }

  @Get(':id')
  @Swagger({
    params: { name: 'id', type: 'string' },
    responseDescription: '取得したポストを返却',
    status: 200,
    summary: '特定のポストを取得する',
    type: Post,
  })
  async findOne(@Param('id') id: string) {
    const post = await this.postsService.findOne(+id)
    return new Post(post)
  }

  @Patch(':id')
  @Swagger({
    params: { name: 'updatePostDto', type: UpdatePostDto },
    responseDescription: '更新したポストを返却',
    status: 200,
    summary: '特定のポストを更新する',
    type: Post,
  })
  async update(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
    const post = await this.postsService.update(+id, updatePostDto)
    return new Post(post)
  }

  @Delete(':id')
  @Swagger({
    params: { name: 'id', type: 'string' },
    responseDescription: '削除したポストを返却',
    status: 200,
    summary: '特定のポストを削除する',
    type: Post,
  })
  async remove(@Param('id') id: string) {
    const post = await this.postsService.remove(+id)
    return new Post(post)
  }
}
