import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/router'

import { getChannel } from 'services/feeds'
import { CACHE_KEYS } from 'services/cacheKeys'
import { ITEMS_PER_PAGE } from '../../MyPost/PostContainer.const'
import type { Feed } from 'types/feeds'

export const useGetFeed = () => {
  const { query } = useRouter()
  const id = query.id as string

  const [currentPage, setCurrentPage] = useState(1)
  // TODO: 이런 get 쿼리를 일관되게 처리하는 방법을 정의하기
  const { data, isLoading } = useQuery(
    [CACHE_KEYS.likedPosts, { page: currentPage, channel: id }],
    () => getChannel(id, currentPage),
    { enabled: !!id, suspense: true }
  )

  const totalPage = data ? Math.ceil(data.totalCount / ITEMS_PER_PAGE) : 1

  return {
    data: data as Feed,
    isLoading,
    currentPage,
    setCurrentPage,
    totalPage,
  }
}
