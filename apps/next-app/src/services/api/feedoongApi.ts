import api from '.'

type FeedoongApiArg = {
  url: string
  method: 'get' | 'post'
  params?: unknown
}

export const feedoongApi = <TData>({ url, method, params }: FeedoongApiArg) => {
  return api[method]<TData>(url, params)
}
