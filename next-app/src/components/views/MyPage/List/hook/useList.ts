import { useQuery } from '@tanstack/react-query'
import { useMemo } from 'react'

import { CACHE_KEYS } from 'services/cacheKeys'
import { getLikedItems } from 'services/feeds'
import { getSubscriptions } from 'services/subscriptions'
import { MyPageListType } from '../../MyPageContainer'

interface Props {
  listType: MyPageListType
  currentPage: number
}

const useList = ({ listType, currentPage = 1 }: Props) => {
  const { data: channelListData, isLoading: isLoadingChannelList } = useQuery(
    [CACHE_KEYS.subscriptions, { page: currentPage }],
    () => getSubscriptions(currentPage)
  )

  const { data: postListData, isLoading: isLoadingPostList } = useQuery(
    [CACHE_KEYS.likedItems, { page: currentPage }],
    () => {
      return getLikedItems(currentPage)
    }
  )

  const getListData = () => {
    switch (listType) {
      case 'post':
        return postListData?.items
      case 'channel':
      default:
        return channelListData?.channels
    }
  }

  const getIsLoading = () => {
    switch (listType) {
      case 'post':
        return isLoadingPostList
      case 'channel':
      default:
        return isLoadingChannelList
    }
  }

  const getIsEmptyList = () => {
    switch (listType) {
      case 'post':
        return !isLoadingPostList && postListData?.items.length === 0
      case 'channel':
      default:
        return !isLoadingChannelList && channelListData?.channels.length === 0
    }
  }

  const getEmptyContent = () => {
    switch (listType) {
      case 'post':
        return '구독 중인 게시물이 없습니다'
      case 'channel':
      default:
        return '저장된 게시물이 없습니다'
    }
  }

  const getTotalCount = () => {
    switch (listType) {
      case 'post':
        return postListData?.totalCount
      case 'channel':
      default:
        return channelListData?.totalCount
    }
  }

  const listData = useMemo(getListData, [
    listType,
    postListData,
    channelListData,
  ])
  const isLoading = useMemo(getIsLoading, [
    listType,
    isLoadingPostList,
    isLoadingChannelList,
  ])
  const isEmptyList = useMemo(getIsEmptyList, [
    listType,
    isLoadingPostList,
    isLoadingChannelList,
    postListData,
    channelListData,
  ])
  const emptyContent = useMemo(getEmptyContent, [listType])
  const totalCount = useMemo(getTotalCount, [
    listType,
    postListData,
    channelListData,
  ])
  return {
    listData,
    isLoading,
    isEmptyList,
    emptyContent,
    totalCount,
  }
}

export default useList
