import { useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/router'

import { useCheckIsMyProfile } from 'features/user/useCheckIsMyProfile'
import { CACHE_KEYS } from 'services/cacheKeys'
import {
  getSubscriptions,
  getSubscriptionsByUsername,
} from 'services/subscriptions'

const useChannelListByUsername = (username?: string) => {
  const router = useRouter()
  const currentPage = Number(router.query.page) || 1
  const isMyProfile = useCheckIsMyProfile()

  const { data, isLoading } = useQuery(
    [CACHE_KEYS.subscriptions, { page: currentPage }],
    () =>
      isMyProfile
        ? getSubscriptions(currentPage)
        : getSubscriptionsByUsername(currentPage, username),
    {
      enabled: !!username,
    }
  )

  return {
    listData: data?.channels,
    isLoading,
    isEmptyList: !isLoading && data?.channels.length === 0,
    totalCount: data?.totalCount,
  }
}

export default useChannelListByUsername
