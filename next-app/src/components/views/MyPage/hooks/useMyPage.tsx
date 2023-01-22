import { useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import { useState } from 'react'

import { getUserInfo, UserProfile } from 'services/auth'
import { CACHE_KEYS } from 'services/cacheKeys'
import { getLikedItems } from 'services/feeds'
import { getSubscriptions } from 'services/subscriptions'
import type { MyPageTabOption } from '../MyPageContainer'

interface Props {
  itemsPerPage: number
}

const useMyPage = ({ itemsPerPage }: Props) => {
  const router = useRouter()
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedTab, setSelectedTab] = useState<MyPageTabOption>({
    label: '등록한 채널',
    value: 'channel',
  })

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

  const { data: userProfile } = useQuery<UserProfile>(
    CACHE_KEYS.me,
    getUserInfo,
    {
      enabled: router.pathname !== '/introduce',
    }
  )

  const listType = selectedTab.value
  const listData = listType === 'channel' ? channelListData : postListData
  const totalPage = listData ? Math.ceil(listData.totalCount / itemsPerPage) : 1

  const getFeedoongUrl = () => {
    const emailId = userProfile?.email.split('@')[0]
    return `feedoong.io/${emailId}`
  }

  return {
    listType,
    totalPage,
    currentPage,
    setCurrentPage,
    selectedTab,
    setSelectedTab,
    userProfile,
    feedoongUrl: getFeedoongUrl(),
    postListData,
    channelListData,
    isLoading:
      listType === 'channel' ? isLoadingChannelList : isLoadingPostList,
    isEmptyList:
      listType === 'channel'
        ? !isLoadingChannelList && channelListData?.channels.length === 0
        : !isLoadingPostList && postListData?.items.length === 0,
    emptyContent:
      listType === 'channel'
        ? '구독 중인 채널이 없습니다.'
        : '저장된 게시물이 없습니다!',
  }
}

export default useMyPage
