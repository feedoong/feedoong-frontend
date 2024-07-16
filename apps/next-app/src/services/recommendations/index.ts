import { feedoongApi } from 'services/api'
import type { Post } from 'types/feeds'
import type { Channel } from 'types/subscriptions'

export const getRecommendedChannels = () => {
  return feedoongApi<{ channels: Channel[] }>({
    method: 'GET',
    url: `/channels/recommended`,
  })
}

export const getRecommendedPosts = () => {
  return feedoongApi<{ items: Post[] }>({
    method: 'GET',
    url: `/items/recommended`,
  })
}
