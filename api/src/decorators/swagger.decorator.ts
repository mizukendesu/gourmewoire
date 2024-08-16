import { applyDecorators, Type } from '@nestjs/common'
import {
  ApiOperation,
  ApiParam,
  ApiParamOptions,
  ApiResponse,
} from '@nestjs/swagger'

/**
 * Swagger設定の型定義です。
 * @template T - レスポンスの型またはパラメータの型
 */
type SwaggerConfig<
  T extends string | Type<unknown> | Type<unknown>[] = Type<unknown>,
> = {
  isArray?: boolean
  params?: ApiParamOptions
  responseDescription: string
  status: number
  summary: string
  type: T
}

/**
 * NestJSのルートやメソッドにSwaggerのドキュメントを適用するデコレータを生成します。
 * @param config - Swaggerの設定
 * @returns 適用されるデコレータ
 */
export function Swagger<T extends string | Type<unknown>>({
  isArray = false,
  params,
  responseDescription,
  status,
  summary,
  type,
}: SwaggerConfig<T>) {
  const decorators = [
    ApiOperation({
      summary,
    }),
    ApiResponse({
      description: responseDescription,
      isArray,
      status,
      type: Array.isArray(type) ? type[0] : type,
    }),
  ]

  if (params) {
    decorators.push(ApiParam(params))
  }

  return applyDecorators(...decorators)
}
