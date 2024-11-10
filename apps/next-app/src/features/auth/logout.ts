import type { QueryClient } from '@tanstack/react-query'
import httpStatus from 'http-status-codes'

import { CACHE_KEYS } from 'services/cacheKeys'
import { destroyTokensClientSide } from 'utils/auth'

export const logoutAction = (client: QueryClient) => {
  client.invalidateQueries({ queryKey: CACHE_KEYS.me })

  destroyTokensClientSide()
  window.location.href = '/'
}

export const isAuthError = (errorStatus: number) => {
  return [httpStatus.UNAUTHORIZED, httpStatus.FORBIDDEN].includes(errorStatus)
}
