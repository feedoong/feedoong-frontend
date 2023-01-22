import { useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import { useMemo } from 'react'

import { CACHE_KEYS } from 'services/cacheKeys'
import { getLikedItems } from 'services/feeds'

const usePostList = () => {
  const router = useRouter()
  const currentPage = Number(router.query.page) || 1

  const { data: postListData, isLoading: isLoadingPostList } = useQuery(
    [CACHE_KEYS.likedItems, { page: currentPage }],
    () => {
      return getLikedItems(currentPage)
    }
  )

  const getListData = () => {
    return postListData?.items
  }

  const getIsLoading = () => {
    return isLoadingPostList
  }

  const getIsEmptyList = () => {
    return !isLoadingPostList && postListData?.items.length === 0
  }

  const getEmptyContent = () => {
    return '구독 중인 게시물이 없습니다'
  }

  const getTotalCount = () => {
    return postListData?.totalCount
  }

  const listData = useMemo(getListData, [postListData])
  const isLoading = useMemo(getIsLoading, [isLoadingPostList])
  const isEmptyList = useMemo(getIsEmptyList, [isLoadingPostList, postListData])
  const emptyContent = useMemo(getEmptyContent, [])
  const totalCount = useMemo(getTotalCount, [postListData])
  return {
    listData,
    isLoading,
    isEmptyList,
    emptyContent,
    totalCount,
  }
}

export default usePostList
