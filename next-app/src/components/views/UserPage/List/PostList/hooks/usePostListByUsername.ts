import { useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/router'

import { useCheckIsMyProfile } from 'features/user/useCheckIsMyProfile'
import { CACHE_KEYS } from 'services/cacheKeys'
import { getLikedItems, getLikedItemsByUsername } from 'services/feeds'

const usePostListByUsername = (username?: string) => {
  const router = useRouter()
  const currentPage = Number(router.query.page) || 1
  const isMyProfile = useCheckIsMyProfile()

  const { data, isLoading } = useQuery(
    [CACHE_KEYS.likedItems, { page: currentPage }],
    () =>
      isMyProfile
        ? getLikedItems(currentPage)
        : getLikedItemsByUsername(currentPage, username),
    {
      enabled: !!username,
    }
  )

  return {
    listData: data?.items,
    isLoading,
    isEmptyList: !isLoading && data?.items.length === 0,
    totalCount: data?.totalCount,
  }
}

export default usePostListByUsername
