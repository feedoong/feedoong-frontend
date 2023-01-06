import Axios, { AxiosError, AxiosResponse } from 'axios'
import humps from 'humps'
import Cookies from 'js-cookie'

import { getApiEndpoint } from 'envs'
import { AccessToken, RefreshToken } from 'constants/auth'
import { refreshAccessToken } from 'services/auth'

const { camelizeKeys } = humps

const accessToken = Cookies.get(AccessToken)

export const createApi = () => {
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
          const refreshToken = Cookies.get(RefreshToken)
          if (refreshToken) {
            // 이 요청의 결과로 새로운 액세스 토큰을 받아오지만
            // 아 아니다 여기서 리턴하니까 해당 사항 없음
            return refreshAccessToken(error)
          }
        }
      }
      // 여기서 에러처리가 되기 때문에 swr의 전역 onError에 잡히고 토큰이 삭제 된다 (아님)
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
