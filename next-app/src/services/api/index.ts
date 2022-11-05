import Axios, { AxiosResponse } from 'axios'
import humps from 'humps'
import Cookies from 'js-cookie'

import { getApiEndpoint } from 'envs'

const { camelizeKeys } = humps

const token = Cookies.get('token')

const api = Axios.create({
  baseURL: getApiEndpoint(),
  validateStatus: (status) => status >= 200 && status < 400,
  headers: {
    ...(token && { Authorization: `Bearer ${token}` }),
  },
})

api.interceptors.response.use(
  (response) => {
    return Promise.resolve(
      camelizeKeys(response.data)
    ) as unknown as AxiosResponse
  },
  (error) => Promise.reject(error)
)

api.interceptors.request.use((config) => {
  return config
})

export default api
