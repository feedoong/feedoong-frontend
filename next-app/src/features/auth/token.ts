import Cookies from 'js-cookie'
import type { AxiosInstance } from 'axios'
import dayjs from 'dayjs'

import { AccessToken, RefreshToken } from 'constants/auth'

export const getRefreshTokenFromCookie = () => {
  return Cookies.get(RefreshToken)
}

export const setRefreshTokenToCookie = (token: string) => {
  Cookies.set(RefreshToken, token, {
    expires: dayjs().add(6, 'month').toDate(),
    sameSite: 'lax',
  })
}

export const getAccessTokenFromCookie = () => {
  return Cookies.get(AccessToken)
}

export const setAccessTokenToCookie = (token: string) => {
  Cookies.set(AccessToken, token, {
    expires: dayjs().add(2, 'hours').toDate(),
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
