import { useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/router'

import { CACHE_KEYS } from 'services/cacheKeys'
import { getSubscriptions } from 'services/subscriptions'

const useChannelList = () => {
  const router = useRouter()
  const currentPage = Number(router.query.page) || 1

  const { data, isLoading } = useQuery(
    [CACHE_KEYS.subscriptions, { page: currentPage }],
    () => getSubscriptions(currentPage)
  )

  return {
    listData: data?.channels,
    isLoading,
    isEmptyList: !isLoading && data?.channels.length === 0,
    emptyContent: '저장된 게시물이 없습니다',
    totalCount: data?.totalCount,
  }
}

export default useChannelList
