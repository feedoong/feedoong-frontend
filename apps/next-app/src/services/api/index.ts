import type { AxiosResponse } from 'axios'
import Axios, { AxiosError } from 'axios'
import humps from 'humps'
import httpStatus from 'http-status-codes'

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
    validateStatus: (status) =>
      status >= httpStatus.OK && status < httpStatus.BAD_REQUEST, // 200 ~ 399
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
        const errorStatus = error.response?.status ?? 0

        if (
          [httpStatus.UNAUTHORIZED, httpStatus.FORBIDDEN].includes(errorStatus)
        ) {
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
