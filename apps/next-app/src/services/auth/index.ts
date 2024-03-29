import axios, {
  type AxiosError,
  type AxiosInstance,
  type AxiosResponse,
  type AxiosRequestHeaders,
} from 'axios'

import { getApiEndpoint } from 'envs'
import api from 'services/api'
import {
  getRefreshTokenFromCookie,
  setAccessTokenToCookie,
  setAuthorizationHeader,
  setRefreshTokenToCookie,
} from 'features/auth/token'

export interface UserProfile {
  email: string
  name: string
  profileImageUrl: string
  username: string
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

export const getUserInfoByUsername = (username: string) => {
  return api.get<null, Exclude<UserProfile, 'username'>>(
    `/users/${username}/info`
  )
}

export const getUserInfoServerSide = (_api: AxiosInstance) => () => {
  return _api.get<null, UserProfile>(`/users/me`)
}

export const refreshAccessToken = async (
  axiosError: AxiosError,
  _api: AxiosInstance
) => {
  const originalRequest = axiosError.config

  // TODO: 리프레시 토큰 만료시 로그아웃 처리도 필요
  const { data } = await axios.post<
    SignUpResponse['refreshToken'],
    AxiosResponse<SignUpResponse>
  >(getApiEndpoint() + `/users/token`, {
    refreshToken: getRefreshTokenFromCookie(),
  })

  const newAccessToken = data.accessToken
  const newRefreshToken = data.refreshToken

  setRefreshTokenToCookie(newRefreshToken)
  setAccessTokenToCookie(newAccessToken)

  setAuthorizationHeader(_api, newAccessToken, { type: 'Bearer' })

  // 필요한 코드인지 확인 필요
  if (!originalRequest.headers) {
    originalRequest.headers = {} as AxiosRequestHeaders
  }
  originalRequest.headers.Authorization = `Bearer ${newAccessToken}`
  // 401로 요청 실패했던 요청 새로운 accessToken으로 재요청
  return _api(originalRequest)
}
