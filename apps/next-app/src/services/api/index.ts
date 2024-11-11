import type { AxiosRequestConfig, AxiosResponse } from 'axios'
import Axios, { AxiosError } from 'axios'
import humps from 'humps'
import httpStatus from 'http-status-codes'

import { getApiEndpoint } from 'envs'
import { refreshAccessToken } from 'services/auth'
import {
  getAccessTokenFromCookie,
  getRefreshTokenFromCookie,
} from 'features/auth/token'
import tokenRefreshMutex from 'features/auth/tokenRefreshMutex'
import { isAuthError } from 'features/auth/logout'

const { camelizeKeys } = humps

export const feedoongApi = <T>(config: AxiosRequestConfig): Promise<T> => {
  const accessToken = getAccessTokenFromCookie()

  const _api = Axios.create({
    baseURL: getApiEndpoint(),
    validateStatus: (status) =>
      status >= httpStatus.OK && status < httpStatus.BAD_REQUEST, // 200 ~ 399
  })

  config.headers = {
    ...config.headers,
    Authorization: accessToken ? `Bearer ${accessToken}` : undefined,
  }

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

        if (isAuthError(errorStatus)) {
          if (getRefreshTokenFromCookie() && tokenRefreshMutex) {
            return tokenRefreshMutex?.runExclusive(async () => {
              const nextConfig = await refreshAccessToken(config)
              return _api(nextConfig)
            })
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

  return _api(config)
}
