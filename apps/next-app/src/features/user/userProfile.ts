import { useQuery, type UseQueryOptions } from '@tanstack/react-query'
import { useRouter } from 'next/router'

import { getRefreshTokenFromCookie } from 'features/auth/token'
import type { UserProfile } from 'services/auth'
import { CACHE_KEYS } from 'services/cacheKeys'
import type { PublicUserInfoResponse } from 'services/types/_generated/apiDocumentation.schemas'
import {
  getUserInfoUsingGET,
  getPublicUserInfoUsingGET,
} from 'services/types/_generated/user'

export const useGetUserProfile = (
  options: Omit<UseQueryOptions<UserProfile>, 'queryKey'> = {}
) => {
  return useQuery<UserProfile>({
    queryKey: CACHE_KEYS.me,
    queryFn: getUserInfoUsingGET,
    // NOTE: 왜 액세스 토큰이 아니라 리프레시 토큰?
    enabled: !!getRefreshTokenFromCookie(),
    ...options,
  })
}

export const useGetUserProfileByUsername = (
  username: string,
  options: Omit<UseQueryOptions<PublicUserInfoResponse>, 'queryKey'> = {}
) => {
  return useQuery<PublicUserInfoResponse>({
    queryKey: [CACHE_KEYS.user, username],
    queryFn: () => getPublicUserInfoUsingGET(username),
    ...options,
    enabled: !!username,
  })
}

export const useGetUsernameFromPath = () => {
  const router = useRouter()

  return router.query.userName as string
}
