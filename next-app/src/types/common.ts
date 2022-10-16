import type { AxiosResponse } from 'axios'

export type ApiResponseData<D = any> = {
  data: D
}

export type ApiResponse<D = any> = AxiosResponse<ApiResponseData<D>>

export interface ErrorResponse {
  exceptions: string[]
  message: string
  status: string
}
