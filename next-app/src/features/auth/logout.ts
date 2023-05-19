import type { QueryClient } from '@tanstack/react-query'

import { CACHE_KEYS } from 'services/cacheKeys'
import { isServer } from 'utils'
import { destroyTokensClientSide } from 'utils/auth'

export const logoutAction = (client: QueryClient) => {
  if (isServer()) {
    return
  }
  client.invalidateQueries(CACHE_KEYS.me)
  destroyTokensClientSide()
  window.location.href = '/'
}
