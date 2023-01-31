import { useQuery, type UseQueryOptions } from '@tanstack/react-query'
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

    /** @NOTE 로그인 했을 때 얻은 유저 정보를 계속 사용하도록 함. 만약 직접 쿼리 무효화를 했을 경우에만 사라짐. */
    staleTime: Infinity,
  })
}
