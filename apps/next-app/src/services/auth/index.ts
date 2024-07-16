import type { AxiosRequestConfig } from 'axios'
import {
  type AxiosError,
  type AxiosInstance,
  type AxiosRequestHeaders,
} from 'axios'

import {
  getRefreshTokenFromCookie,
  setAccessTokenToCookie,
  setRefreshTokenToCookie,
} from 'features/auth/token'
import type UserProfile from 'pages/[userName]'
import { reissueTokenUsingPOST } from 'services/types/_generated/user'

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

export const refreshAccessToken = async (
  axiosError: AxiosError,
  _api: AxiosInstance
) => {
  const originalRequest = axiosError.config as AxiosRequestConfig

  // TODO: 리프레시 토큰 만료시 로그아웃 처리도 필요
  const data = await reissueTokenUsingPOST({
    refreshToken: getRefreshTokenFromCookie(),
  })

  setRefreshTokenToCookie(data.refreshToken)
  setAccessTokenToCookie(data.accessToken)

  // 필요한 코드인지 확인 필요
  if (!originalRequest?.headers) {
    originalRequest!.headers = {} as AxiosRequestHeaders
  }
  originalRequest!.headers.Authorization = `Bearer ${data.accessToken}`
  // 401로 요청 실패했던 요청 새로운 accessToken으로 재요청
  return _api(originalRequest!)
}
