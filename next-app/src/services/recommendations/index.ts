import type { AxiosInstance } from 'axios'

import api from 'services/api'
import type { Recommendations } from 'types/recommendations'

/** @deprecated */
export const getRecommendations = () => {
  return api.get<null, Recommendations>(`/recommendations`)
}

/** @note 새로운 api 이므로 연결 필요 */
export const getRecommendationChannelsServerSide =
  (_api: AxiosInstance) => () => {
    return _api.get<null, Recommendations>(`/channels/recommended`)
  }

/** @note 새로운 api 이므로 연결 필요 */
export const getRecommendationPostsServerSide = (_api: AxiosInstance) => () => {
  return _api.get<null, Recommendations>(`/items/recommended`)
}
