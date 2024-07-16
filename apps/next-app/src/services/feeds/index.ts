import { feedoongApi } from 'services/api/index'
import type {
  Feed,
  LikePostResponse,
  PreviewResponse,
  SubmitRssUrlParams,
  SubmitRssUrlResponse,
  SubmitViewedPost,
} from 'types/feeds'

export const getFeeds = (page = 1, size = 10) => {
  return feedoongApi<Feed>({
    method: 'GET',
    url: '/items',
    params: {
      page,
      size,
    },
  })
}

export const getChannel = (channelId: string, page = 1, size = 10) => {
  return feedoongApi<Feed>({
    method: 'GET',
    url: `/items/channel/${channelId}`,
    params: {
      page,
      size,
    },
  })
}

export const checkUrlAsRss = (url: string) => {
  return feedoongApi<PreviewResponse>({
    method: 'GET',
    url: `/channels/preview`,
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
  return feedoongApi<PreviewResponse>({
    method: 'GET',
    url: `/channels/preview/rss`,
    params: { homeUrl, rssFeedUrl },
  })
}

export const submitRssUrl = (params: Partial<SubmitRssUrlParams>) => {
  if (!params.url || !params.feedUrl) {
    throw new Error('url and feedUrl are required')
  }
  return feedoongApi<SubmitRssUrlResponse>({
    method: 'POST',
    url: `/channels`,
    data: {
      ...params,
    },
  })
}

export const likePost = (id: string) => {
  return feedoongApi<LikePostResponse>({
    method: 'POST',
    url: `/likes/${id}`,
  })
}

export const unlikePost = (id: string) => {
  return feedoongApi<LikePostResponse>({
    method: 'DELETE',
    url: `/likes/${id}`,
  })
}

export const getLikedPosts = (page: number) => {
  return feedoongApi<Feed>({
    method: 'GET',
    url: `/items/liked`,
    params: { page },
  })
}

export const submitViewedPost = (id: number) => {
  return feedoongApi<SubmitViewedPost>({
    method: 'POST',
    url: `/items/view/${id}`,
  })
}

export const getLikedPostsByUsername = (page: number, username?: string) => {
  return feedoongApi<Feed>({
    method: 'GET',
    url: `/users/${username}/liked-items`,
    params: { page },
  })
}
