import Axios, { AxiosResponse } from 'axios'
import humps from 'humps'

import { getApiEndpoint } from 'envs'
import Cookies from 'js-cookie'

const { camelizeKeys } = humps

const api = Axios.create({
  baseURL: `${getApiEndpoint()}`,
  validateStatus: (status) => status >= 200 && status < 400,
  headers: {
    Authorization: `Bearer ${Cookies.get('token')}`,
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
