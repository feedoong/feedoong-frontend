import axios, { AxiosError, AxiosResponse } from 'axios'
import Cookies from 'js-cookie'

import { getApiEndpoint } from 'envs'
import api from 'services/api'
import { AccessToken, RefreshToken } from 'constants/auth'

export interface UserProfile {
  email: string
  name: string
  profileImageUrl: string
}

export interface SignUpResponse extends UserProfile {
  accessToken: string
  refreshToken: string
}

export const submitAccessToken = (token: string) => {
  return api.post<null, SignUpResponse>(`/users/login/google`, null, {
    params: { accessToken: token },
  })
}

export const getUserInfo = () => {
  return api.get<null, UserProfile>(`/users/me`)
}

export const refreshAccessToken = async (axiosError: AxiosError) => {
  try {
    const originalRequest = axiosError.config
    const refreshToken = Cookies.get(RefreshToken)

    const { data } = await axios.post<
      SignUpResponse['refreshToken'],
      AxiosResponse<SignUpResponse>
    >(getApiEndpoint() + `/users/token`, {
      refreshToken,
    })

    const newAccessToken = data.accessToken
    const newRefreshToken = data.refreshToken

    Cookies.set(AccessToken, newAccessToken)
    Cookies.set(RefreshToken, newRefreshToken)

    axios.defaults.headers.common.Authorization = `Bearer ${newAccessToken}`
    originalRequest.headers!.Authorization = `Bearer ${newAccessToken}`
    // 401로 요청 실패했던 요청 새로운 accessToken으로 재요청
    return axios(originalRequest)
  } catch (error) {
    console.error(error)
    Cookies.remove(AccessToken)
    Cookies.remove(RefreshToken)

    window.location.href = '/signup'
    return Promise.reject(error)
  }
}
