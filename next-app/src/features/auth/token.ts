import Cookies from 'js-cookie'
import type { AxiosInstance } from 'axios'

import { AccessToken, RefreshToken } from 'constants/auth'

export const getRefreshTokenFromCookie = () => {
  return Cookies.get(RefreshToken)
}

export const setRefreshTokenToCookie = (token: string) => {
  Cookies.set(RefreshToken, token, {
    expires: 20,
    sameSite: 'lax',
  })
}

export const getAccessTokenFromCookie = () => {
  return Cookies.get(AccessToken)
}

export const setAccessTokenToCookie = (token: string) => {
  Cookies.set(AccessToken, token, {
    expires: 7,
    secure: true,
    sameSite: 'lax',
  })
}

export const setAuthorizationHeader = (
  api: AxiosInstance,
  token: string,
  options?: {
    type: 'Bearer' | 'Basic'
  }
) => {
  api.defaults.headers.common['Authorization'] = options?.type
    ? `${options.type} ${token}`
    : token
}
