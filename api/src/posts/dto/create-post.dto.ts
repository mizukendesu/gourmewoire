import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsString } from 'class-validator'

export class CreatePostDto {
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
