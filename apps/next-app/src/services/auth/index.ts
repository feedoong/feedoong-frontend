import type { AxiosRequestConfig } from 'axios'

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

export const refreshAccessToken = async (config: AxiosRequestConfig) => {
  // TODO: 리프레시 토큰 만료시 로그아웃 처리도 필요
  const data = await reissueTokenUsingPOST({
    refreshToken: getRefreshTokenFromCookie(),
  })

  setRefreshTokenToCookie(data.refreshToken)
  setAccessTokenToCookie(data.accessToken)

  Object.assign(config.headers ?? {}, {
    Authorization: `Bearer ${data.accessToken}`,
  })

  return config
}
