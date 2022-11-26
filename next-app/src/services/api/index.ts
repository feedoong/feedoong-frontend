import Axios, { AxiosError, AxiosResponse } from 'axios'
import humps from 'humps'
import Cookies from 'js-cookie'

import { getApiEndpoint } from 'envs'
import { AccessToken, RefreshToken } from 'constants/auth'
import { refreshAccessToken } from 'services/auth'

const { camelizeKeys } = humps

const accessToken = Cookies.get(AccessToken)

const api = Axios.create({
  baseURL: getApiEndpoint(),
  validateStatus: (status) => status >= 200 && status < 400,
  headers: {
    ...(accessToken && { Authorization: `Bearer ${accessToken}` }),
  },
})

api.interceptors.response.use(
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
        const refreshToken = Cookies.get(RefreshToken)
        if (refreshToken) {
          return refreshAccessToken(error)
        }
      }
    }
    return Promise.reject(error)
  }
)

api.interceptors.request.use((config) => {
  return config
})

export default api
