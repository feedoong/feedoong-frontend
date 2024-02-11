import type { QueryClient } from '@tanstack/react-query'

import { CACHE_KEYS } from 'services/cacheKeys'
import { destroyTokensClientSide } from 'utils/auth'

export const logoutAction = (client: QueryClient) => {
  client.invalidateQueries(CACHE_KEYS.me)

  destroyTokensClientSide()
  window.location.href = '/'
}
