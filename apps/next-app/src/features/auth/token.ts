import dayjs from 'dayjs'
import Cookies from 'js-cookie'

import { AccessToken, RefreshToken } from 'constants/auth'
import { isServer } from 'utils'

const isAppRouter = () => {
  try {
    // Throws an error if we are not in the App Router context.
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const { cookies } = require('next/headers')
    cookies()
    return true
  } catch (e) {
    return false
  }
}

// eslint-disable-next-line @typescript-eslint/no-var-requires
export const getNextCookies = () => require('next/headers').cookies()
// import('next/headers').then((res) => res.cookies())

const getIsomorphicCookies = () =>
  isServer() && isAppRouter() ? getNextCookies() : Cookies

export const getRefreshTokenFromCookie = () => {
  const cookies = getIsomorphicCookies()
  const token = cookies.get(RefreshToken)

  if (token instanceof Object && 'value' in token) {
    return token.value
  }
  return token
}

export const setRefreshTokenToCookie = async (token: string) => {
  const cookies = await getIsomorphicCookies()

  cookies.set(RefreshToken, token, {
    expires: dayjs().add(6, 'month').toDate(),
    sameSite: 'lax',
  })
}

export const getAccessTokenFromCookie = async () => {
  const cookies = await getIsomorphicCookies()
  const token = cookies.get(RefreshToken)

  if (token instanceof Object && 'value' in token) {
    return token.value
  }

  return cookies.get(AccessToken)
}

export const setAccessTokenToCookie = async (token: string) => {
  const cookies = await getIsomorphicCookies()

  cookies.set(AccessToken, token, {
    expires: dayjs().add(1, 'month').toDate(),
    secure: true,
    sameSite: 'lax',
  })
}
