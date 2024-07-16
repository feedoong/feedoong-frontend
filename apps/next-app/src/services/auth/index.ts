import axios, {
  type AxiosError,
  type AxiosInstance,
  type AxiosResponse,
  type AxiosRequestHeaders,
} from 'axios'

import { getApiEndpoint } from 'envs'
import { feedoongApi } from 'services/api'
import {
  getRefreshTokenFromCookie,
  setAccessTokenToCookie,
  setRefreshTokenToCookie,
} from 'features/auth/token'
import type UserProfile from 'pages/[userName]'

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
  return feedoongApi<SignUpResponse>({
    method: 'POST',
    url: '/users/login/google',
    data: null,
    params: { accessToken: token },
  })
}

export const getUserInfo = () => {
  return feedoongApi<UserProfile>({
    method: 'GET',
    url: '/users/me',
  })
}

export const getUserInfoByUsername = (username: string) => {
  return feedoongApi<Exclude<UserProfile, 'username'>>({
    method: 'GET',
    url: `/users/${username}/info`,
  })
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

  // 필요한 코드인지 확인 필요
  if (!originalRequest?.headers) {
    originalRequest!.headers = {} as AxiosRequestHeaders
  }
  originalRequest!.headers.Authorization = `Bearer ${newAccessToken}`
  // 401로 요청 실패했던 요청 새로운 accessToken으로 재요청
  return _api(originalRequest!)
}
