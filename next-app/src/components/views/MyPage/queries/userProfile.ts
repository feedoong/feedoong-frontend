import { useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/router'

import { requiredAuthMatcher } from 'features/auth/requiredAuthMatcher'
import { getUserInfo, UserProfile } from 'services/auth'
import { CACHE_KEYS } from 'services/cacheKeys'

export const useGetUserProfile = () => {
  const router = useRouter()

  return useQuery<UserProfile>(CACHE_KEYS.me, getUserInfo, {
    enabled: requiredAuthMatcher(router.pathname),
  })
}
