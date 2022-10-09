import Axios, { AxiosResponse } from 'axios'
import humps from 'humps'

import { getApiEndpoint } from 'envs'

const { camelizeKeys } = humps

const api = Axios.create({
  baseURL: `${getApiEndpoint()}`,
  validateStatus: (status) => status >= 200 && status < 400,
  withCredentials: true,
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
