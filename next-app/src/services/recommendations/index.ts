import type { AxiosInstance } from 'axios'

import api from 'services/api'
import { Item } from 'types/feeds'
import { Subscription } from 'types/subscriptions'

export const getRecommendedChannels = () => {
  return api.get<null, { channels: Subscription[] }>(`/channels/recommended`)
}

export const getRecommendedPosts = () => {
  return api.get<null, { items: Item[] }>(`/items/recommended`)
}

/** @note 새로운 api 이므로 연결 필요 */
export const getRecommendedChannelsServerSide = (_api: AxiosInstance) => () => {
  return _api.get<null, { channels: Subscription[] }>(`/channels/recommended`)
}

/** @note 새로운 api 이므로 연결 필요 */
export const getRecommendedPostsServerSide = (_api: AxiosInstance) => () => {
  return _api.get<null, { items: Item[] }>(`/items/recommended`)
}
