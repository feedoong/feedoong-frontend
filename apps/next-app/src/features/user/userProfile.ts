import { useQuery, type UseQueryOptions } from '@tanstack/react-query'
import { useRouter } from 'next/router'

import { userQueries } from 'entities/user/api'
import { CACHE_KEYS } from 'services/cacheKeys'
import type { PublicUserInfoResponse } from 'services/types/_generated/apiDocumentation.schemas'
import { getPublicUserInfoUsingGET } from 'services/types/_generated/user'

export const useGetUserProfile = () => {
  return useQuery(userQueries.me())
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
