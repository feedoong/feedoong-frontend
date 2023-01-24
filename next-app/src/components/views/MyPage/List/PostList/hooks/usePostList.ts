import { useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/router'

import { CACHE_KEYS } from 'services/cacheKeys'
import { getLikedItems } from 'services/feeds'

const usePostList = () => {
  const router = useRouter()
  const currentPage = Number(router.query.page) || 1

  const { data, isLoading } = useQuery(
    [CACHE_KEYS.likedItems, { page: currentPage }],
    () => {
      return getLikedItems(currentPage)
    }
  )

  return {
    listData: data?.items,
    isLoading,
    isEmptyList: !isLoading && data?.items.length === 0,
    emptyContent: '구독 중인 게시물이 없습니다',
    totalCount: data?.totalCount,
  }
}

export default usePostList
