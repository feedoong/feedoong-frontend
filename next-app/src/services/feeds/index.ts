import api from 'services/api'
import type {
  Feed,
  PreviewResponse,
  SubmitRssUrlParams,
  SubmitRssUrlResponse,
} from 'types/feeds'

export const getFeeds = () => {
  return api.get<null, Feed>(`/items`)
}

export const checkUrlAsRss = (url: string) => {
  return api.get<null, PreviewResponse>(`/channels/preview`, {
    params: { url },
  })
}

export const submitRssUrl = (params: Partial<SubmitRssUrlParams>) => {
  console.log({ params })
  if (!params.url || !params.feedUrl) {
    throw new Error('url and feedUrl are required')
  }
  return api.post<SubmitRssUrlParams, SubmitRssUrlResponse>(`/channels`, {
    ...params,
  })
}
