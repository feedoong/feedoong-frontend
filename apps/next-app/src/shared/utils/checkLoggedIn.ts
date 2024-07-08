import type { ReadonlyRequestCookies } from 'next/dist/server/web/spec-extension/adapters/request-cookies'

export const checkLoggedIn = (cookies: ReadonlyRequestCookies) => {
  return Boolean(cookies.get('accessToken')?.value)
}
