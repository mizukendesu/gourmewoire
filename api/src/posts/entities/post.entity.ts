import { ApiProperty } from '@nestjs/swagger'
import { Expose } from 'class-transformer'

export class Post {
  constructor(partial: Partial<Post>) {
    Object.assign(this, partial)
  }

  @Expose()
  @ApiProperty({
    description: 'ポストのID',
    example: 1,
  })
  id: number

  @Expose()
  @ApiProperty({
    description: 'ポストのタイトル',
    example: 'ポストのタイトル',
  })
  title: string

  @Expose()
  @ApiProperty({
    description: 'ポストのコンテンツ',
    example: 'ポストのコンテンツ',
  })
  content: string

  @Expose()
  @ApiProperty({
    description: 'ポストの作成日',
    example: '2024-01-01',
  })
  createdAt: Date

  @Expose()
  @ApiProperty({
    description: 'ポストの更新日',
    example: '2024-01-01',
  })
  updatedAt: Date
}
