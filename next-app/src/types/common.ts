import { AxiosError, AxiosResponse } from 'axios'

export type ApiResponseData<D = any> = {
  data: D
}

export type ApiResponse<D = any> = AxiosResponse<ApiResponseData<D>>
