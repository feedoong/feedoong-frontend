import type { AxiosInstance } from 'axios'

import api from 'services/api'
import type { Recommendations } from 'types/recommendations'

export const getRecommendations = () => {
  return api.get<null, Recommendations>(`/recommendations`)
}

export const getRecommendationsServerSide = (_api: AxiosInstance) => () => {
  return _api.get<null, Recommendations>(`/recommendations`)
}
