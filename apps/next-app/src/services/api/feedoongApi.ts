import type { AxiosHeaders } from 'axios'

import api from '.'

type FeedoongApiArg = {
  url: string
  method: 'get' | 'post' | 'delete' | 'put'
  params?: unknown
  headers?: Partial<AxiosHeaders>
  data?: unknown
}

export const feedoongApi = <TData>({ url, method, params }: FeedoongApiArg) => {
  return api[method]<TData>(url, params)
}
