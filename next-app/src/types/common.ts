import type { AxiosResponse } from 'axios'

export type ApiResponseData<D = any> = {
  data: D
}

export type ApiResponse<D = any> = AxiosResponse<ApiResponseData<D>>

export interface ErrorResponse {
  message: string
  code: string
}

export const RESPONSE_CODE = {
  REFRESH_TOKEN_NOT_FOUND: 'REFRESH_TOKEN_NOT_FOUND',
  EXPIRED_REFRESH_TOKEN: 'EXPIRED_REFRESH_TOKEN',
}
