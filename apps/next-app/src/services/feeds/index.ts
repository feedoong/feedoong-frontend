import type { AxiosInstance } from 'axios'

import api from 'services/api'
import type {
  Feed,
  LikePostResponse,
  PreviewResponse,
  SubmitRssUrlParams,
  SubmitRssUrlResponse,
  SubmitViewedPost,
} from 'types/feeds'

export const getFeeds = (page = 1, size = 10) => {
  return api.get<null, Feed>(`/items`, {
    params: {
      page,
      size,
    },
  })
}

export const getFeedsServerSide =
  (_api: AxiosInstance) =>
  (page = 1, size = 10) => {
    return _api.get<null, Feed>(`/items`, {
      params: {
        page,
        size,
      },
    })
  }

export const getChannel = (channelId: string, page = 1, size = 10) => {
  return api.get<null, Feed>(`/items/channel/${channelId}`, {
    params: {
      page,
      size,
    },
  })
}

export const checkUrlAsRss = (url: string) => {
  return api.get<null, PreviewResponse>(`/channels/preview`, {
    params: { url },
  })
}

export const checkUrlAsDirectRss = ({
  homeUrl,
  rssFeedUrl,
}: {
  homeUrl: string
  rssFeedUrl: string
}) => {
  return api.get<null, PreviewResponse>(`/channels/preview/rss`, {
    params: { homeUrl, rssFeedUrl },
  })
}

export const submitRssUrl = (params: Partial<SubmitRssUrlParams>) => {
  if (!params.url || !params.feedUrl) {
    throw new Error('url and feedUrl are required')
  }
  return api.post<SubmitRssUrlParams, SubmitRssUrlResponse>(`/channels`, {
    ...params,
  })
}

export const likePost = (id: string) => {
  return api.post<null, LikePostResponse>(`/likes/${id}`)
}

export const unlikePost = (id: string) => {
  return api.delete<null, LikePostResponse>(`/likes/${id}`)
}

export const getLikedPosts = (page: number) => {
  return api.get<null, Feed>(`/items/liked`, {
    params: { page },
  })
}

export const submitViewedPost = (id: number) => {
  return api.post<null, SubmitViewedPost>(`/items/view/${id}`)
}

export const getLikedPostsByUsername = (page: number, username?: string) => {
  return api.get<null, Feed>(`/users/${username}/liked-items`, {
    params: { page },
  })
}
