import Cookies from 'js-cookie'

import { AccessToken, RefreshToken } from 'constants/auth'

export const setRefreshTokenToCookie = (token: string) => {
  Cookies.set(RefreshToken, token, {
    expires: 20,
    sameSite: 'lax',
  })
}

export const setAccessTokenToCookie = (token: string) => {
  Cookies.set(AccessToken, token, {
    expires: 7,
    secure: true,
    sameSite: 'lax',
  })
}
