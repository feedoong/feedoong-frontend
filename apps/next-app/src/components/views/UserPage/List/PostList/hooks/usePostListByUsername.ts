import { useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/router'

import { useCheckIsMyProfile } from 'features/user/useCheckIsMyProfile'
import { CACHE_KEYS } from 'services/cacheKeys'
import { getLikesUsingGET } from 'services/types/_generated/item'
import { getUserLikedItemsUsingGET } from 'services/types/_generated/user'

const usePostListByUsername = (username?: string) => {
  const router = useRouter()
  const currentPage = Number(router.query.page) || 1
  const isMyProfile = useCheckIsMyProfile()

  const { data, isLoading } = useQuery({
    queryKey: [CACHE_KEYS.likedPosts, { page: currentPage }],
    queryFn: () =>
      isMyProfile
        ? getLikesUsingGET({
            page: currentPage,
            size: 10,
          })
        : getUserLikedItemsUsingGET(username!, {
            page: currentPage,
            size: 10,
          }),
    enabled: !!username,
  })

  return {
    listData: data?.items,
    isLoading,
    isEmptyList: !isLoading && data?.items.length === 0,
    totalCount: data?.totalCount,
  }
}

export default usePostListByUsername
