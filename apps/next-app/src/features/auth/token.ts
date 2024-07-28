import dayjs from 'dayjs'
import Cookies from 'js-cookie'

import { AccessToken, RefreshToken } from 'constants/auth'
import { isServer } from 'utils'
import { getNextCookies, isAppRouter } from 'shared/libs/nextjs'

const getIsomorphicCookies = () =>
  isServer() && isAppRouter() ? getNextCookies() : Cookies

const getIsomorphicToken = (token: ReturnType<typeof getIsomorphicCookies>) => {
  if (token instanceof Object && 'value' in token) {
    return token.value
  }
  return token
}

export const getRefreshTokenFromCookie = () => {
  const cookies = getIsomorphicCookies()
  const token = getIsomorphicToken(cookies.get(RefreshToken))

  return token
}

export const setRefreshTokenToCookie = (token: string) => {
  const cookies = getIsomorphicCookies()

  cookies.set(RefreshToken, token, {
    expires: dayjs().add(6, 'month').toDate(),
    sameSite: 'lax',
  })
}

export const getAccessTokenFromCookie = () => {
  const cookies = getIsomorphicCookies()
  const token = getIsomorphicToken(cookies.get(AccessToken))

  return token
}

export const setAccessTokenToCookie = (token: string) => {
  const cookies = getIsomorphicCookies()

  cookies.set(AccessToken, token, {
    expires: dayjs().add(1, 'month').toDate(),
    secure: true,
    sameSite: 'lax',
  })
}
