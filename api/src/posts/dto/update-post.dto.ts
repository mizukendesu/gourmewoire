import { PartialType } from '@nestjs/mapped-types'
import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsString } from 'class-validator'

import { CreatePostDto } from './create-post.dto'

export class UpdatePostDto extends PartialType(CreatePostDto) {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'ポストのタイトル',
  })
  title: string

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'ポストの内容',
  })
  content: string
}
