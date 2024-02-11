import { useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/router'

import { useCheckIsMyProfile } from 'features/user/useCheckIsMyProfile'
import { CACHE_KEYS } from 'services/cacheKeys'
import { getChannels, getChannelsByUsername } from 'services/subscriptions'

const useChannelListByUsername = (username?: string) => {
  const router = useRouter()
  const currentPage = Number(router.query.page) || 1
  const isMyProfile = useCheckIsMyProfile()

  const { data, isLoading } = useQuery(
    [CACHE_KEYS.channels, { page: currentPage }],
    () =>
      isMyProfile
        ? getChannels(currentPage)
        : getChannelsByUsername(currentPage, username),
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
