import { useQuery, UseQueryOptions } from '@tanstack/react-query'
import { useRouter } from 'next/router'

import { HOUR, MINUTE } from 'constants/dateTime'
import { requiredAuthMatcher } from 'features/auth/requiredAuthMatcher'
import { getUserInfo, UserProfile } from 'services/auth'
import { CACHE_KEYS } from 'services/cacheKeys'

export const useGetUserProfile = (
  options: UseQueryOptions<UserProfile> = {}
) => {
  const router = useRouter()

  return useQuery<UserProfile>(CACHE_KEYS.me, getUserInfo, {
    ...options,
    enabled: requiredAuthMatcher(router.pathname),
    /**
     * TODO: cache time, stale time 정책 정의
     */
    staleTime: MINUTE * 30,
    cacheTime: HOUR,
  })
}
