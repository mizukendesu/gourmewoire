import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'

import { CreatePostDto } from './dto/create-post.dto'
import { UpdatePostDto } from './dto/update-post.dto'

@Injectable()
export class PostsService {
  constructor(private prisma: PrismaService) {}

  create(createPostDto: CreatePostDto) {
    return this.prisma.post.create({
      data: {
        content: createPostDto.content,
        title: createPostDto.title,
      },
    })
  }

  findAll() {
    return this.prisma.post.findMany()
  }

  findOne(id: number) {
    return this.prisma.post.findUnique({
      where: {
        id,
      },
    })
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return this.prisma.post.update({
      data: {
        content: updatePostDto.content,
        title: updatePostDto.title,
      },
      where: {
        id,
      },
    })
  }

  remove(id: number) {
    return this.prisma.post.delete({
      where: {
        id,
      },
    })
  }
}
