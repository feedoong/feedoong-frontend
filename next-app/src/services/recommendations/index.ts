import type { AxiosInstance } from 'axios'

import api from 'services/api'
import { Post } from 'types/feeds'
import { Channel } from 'types/subscriptions'

export const getRecommendedChannels = () => {
  return api.get<null, { channels: Channel[] }>(`/channels/recommended`)
}

export const getRecommendedPosts = () => {
  return api.get<null, { items: Post[] }>(`/items/recommended`)
}

/** @note 새로운 api 이므로 연결 필요 */
export const getRecommendedChannelsServerSide = (_api: AxiosInstance) => () => {
  return _api.get<null, { channels: Channel[] }>(`/channels/recommended`)
}

/** @note 새로운 api 이므로 연결 필요 */
export const getRecommendedPostsServerSide = (_api: AxiosInstance) => () => {
  return _api.get<null, { items: Post[] }>(`/items/recommended`)
}
