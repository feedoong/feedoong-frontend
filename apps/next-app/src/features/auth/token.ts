import dayjs from 'dayjs'
import Cookies from 'js-cookie'

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
    expires: dayjs().add(1, 'month').toDate(),
    secure: true,
    sameSite: 'lax',
  })
}
