import { useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import { useMemo } from 'react'

import { CACHE_KEYS } from 'services/cacheKeys'
import { getSubscriptions } from 'services/subscriptions'

const useChannelList = () => {
  const router = useRouter()
  const currentPage = Number(router.query.page) || 1

  const { data: channelListData, isLoading: isLoadingChannelList } = useQuery(
    [CACHE_KEYS.subscriptions, { page: currentPage }],
    () => getSubscriptions(currentPage)
  )

  const getListData = () => {
    return channelListData?.channels
  }

  const getIsLoading = () => {
    return isLoadingChannelList
  }

  const getIsEmptyList = () => {
    return !isLoadingChannelList && channelListData?.channels.length === 0
  }

  const getEmptyContent = () => {
    return '저장된 게시물이 없습니다'
  }

  const getTotalCount = () => {
    return channelListData?.totalCount
  }

  const listData = useMemo(getListData, [channelListData])
  const isLoading = useMemo(getIsLoading, [isLoadingChannelList])
  const isEmptyList = useMemo(getIsEmptyList, [
    isLoadingChannelList,
    channelListData,
  ])
  const emptyContent = useMemo(getEmptyContent, [])
  const totalCount = useMemo(getTotalCount, [channelListData])
  return {
    listData,
    isLoading,
    isEmptyList,
    emptyContent,
    totalCount,
  }
}

export default useChannelList
