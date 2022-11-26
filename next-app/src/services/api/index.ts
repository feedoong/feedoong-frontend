import Axios, { AxiosError, AxiosResponse } from 'axios'
import humps from 'humps'
import Cookies from 'js-cookie'

import { getApiEndpoint } from 'envs'
import { AccessToken } from 'constants/auth'
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
      // TODO: exception 조건 수정
      if (error.response?.data.message.includes('expired')) {
        return refreshAccessToken(error)
      }
    }
    return Promise.reject(error)
  }
)

api.interceptors.request.use((config) => {
  return config
})

export default api
