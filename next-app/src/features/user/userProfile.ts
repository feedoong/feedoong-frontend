import { useQuery, type UseQueryOptions } from '@tanstack/react-query'
import { useRouter } from 'next/router'

import { requiredAuthMatcher } from 'features/auth/requiredAuthMatcher'
import { getUserInfo, getUserInfoByUsername, UserProfile } from 'services/auth'
import { CACHE_KEYS } from 'services/cacheKeys'

export const useGetUserProfile = (
  options: UseQueryOptions<UserProfile> = {}
) => {
  const router = useRouter()

  return useQuery<UserProfile>(CACHE_KEYS.me, getUserInfo, {
    ...options,
    enabled: requiredAuthMatcher(router.pathname),
  })
}

export const useGetUserProfileByUsername = (
  username: string,
  options: UseQueryOptions<UserProfile> = {}
) => {
  return useQuery<UserProfile>(
    [CACHE_KEYS.user, username],
    () => getUserInfoByUsername(username),
    { ...options }
  )
}

export const useGetUsernameFromPath = () => {
  const router = useRouter()

  return router.query.userName as string
}
