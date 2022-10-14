import api from 'services/api'
import type {
  Feed,
  LikeItemResponse,
  PreviewResponse,
  SubmitRssUrlParams,
  SubmitRssUrlResponse,
  SubmitViewedItem,
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

export const likeItem = (id: string) => {
  return api.post<null, LikeItemResponse>(`/likes/${id}`)
}

// likeItem 두번 호출하면 그냥 취소 되는 듯
export const unlikeItem = (id: string) => {
  return api.delete<null, null>(`/likes/${id}`)
}

export const getLikedItems = (page: number) => {
  return api.get<null, Feed>(`/items/liked`, {
    params: { page }
  })
}

export const submitViewedItem = (id: number) => {
  return api.post<null, SubmitViewedItem>(`/items/view/${id}`)
}
