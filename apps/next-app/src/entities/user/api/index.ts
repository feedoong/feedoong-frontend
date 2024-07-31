import { queryOptions } from '@tanstack/react-query'

import { getRefreshTokenFromCookie } from 'features/auth/token'
import { CACHE_KEYS } from 'services/cacheKeys'
import { getUserInfoUsingGET } from 'services/types/_generated/user'

export const userQueries = {
  all: () => ['user'],
  me: () =>
    queryOptions({
      queryKey: CACHE_KEYS.me,
      queryFn: getUserInfoUsingGET,
      enabled: !!getRefreshTokenFromCookie(),
    }),
}
