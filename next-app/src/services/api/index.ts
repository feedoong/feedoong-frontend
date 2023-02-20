import Axios, { AxiosError, AxiosResponse } from 'axios'
import humps from 'humps'

import { getApiEndpoint } from 'envs'
import { refreshAccessToken } from 'services/auth'
import {
  getAccessTokenFromCookie,
  getRefreshTokenFromCookie,
} from 'features/auth/token'

const { camelizeKeys } = humps

export const createApi = () => {
  const accessToken = getAccessTokenFromCookie()

  const _api = Axios.create({
    baseURL: getApiEndpoint(),
    validateStatus: (status) => status >= 200 && status < 400,
    headers: {
      ...(accessToken && { Authorization: `Bearer ${accessToken}` }),
    },
  })

  _api.interceptors.response.use(
    // try
    (response) => {
      return Promise.resolve(
        camelizeKeys(response.data)
      ) as unknown as AxiosResponse
    },
    // catch
    async (error) => {
      if (error instanceof AxiosError) {
        if (error.response?.status === 401 || error.response?.status === 403) {
          // 리프레시 토큰이 없을 경우 로그인 페이지로 리다이렉트 시켜야 함
          if (getRefreshTokenFromCookie()) {
            return refreshAccessToken(error, _api)
          }
        }
      }
      // 여기서 에러처리가 되면 때문에 swr의 전역 onError로 빠짐
      return Promise.reject(error)
    }
  )

  _api.interceptors.request.use((config) => {
    return config
  })

  return _api
}

const api = createApi()

export default api
