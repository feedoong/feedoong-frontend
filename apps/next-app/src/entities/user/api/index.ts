import { queryOptions } from '@tanstack/react-query'

import { getRefreshTokenFromCookie } from 'features/auth/token'
import { getUserInfoUsingGET } from 'services/types/_generated/user'

export const userQueries = {
  all: () => ['user'],
  me: () =>
    queryOptions({
      queryKey: [...userQueries.all(), 'me'],
      queryFn: getUserInfoUsingGET,
      enabled: !!getRefreshTokenFromCookie(),
    }),
}
