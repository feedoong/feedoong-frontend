import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import Image from 'next/image'

import Paging from 'components/common/Paging'
import FeedItem from 'components/common/FeedItem'
import Flex from 'components/common/Flex'
import { CACHE_KEYS } from 'services/cacheKeys'
import { getSubscriptions } from 'services/subscriptions'
import { SkeletonSubscriptionType } from 'components/common/Skeleton'
import EmptyContents from 'components/common/EmptyContents'
import { getUserInfo, UserProfile } from 'services/auth'

import * as S from './MyPageContainer.style'

import Icons from 'assets/icons'

const MyPageContainer = () => {
  const ITEMS_PER_PAGE = 10
  const router = useRouter()
  const [currentPage, setCurrentPage] = useState(1)
  const { data, isLoading } = useQuery(
    [CACHE_KEYS.subscriptions, { page: currentPage }],
    () => getSubscriptions(currentPage)
  )
  const { data: userProfile } = useQuery<UserProfile>(
    CACHE_KEYS.me,
    getUserInfo,
    {
      enabled: router.pathname !== '/introduce',
    }
  )

  const totalPage = data ? Math.ceil(data.totalCount / ITEMS_PER_PAGE) : 1
  const name = userProfile?.name
  const profileImageUrl = userProfile?.profileImageUrl

  const getFeedoongUrl = () => {
    const emailId = userProfile?.email.split('@')[0]
    return `feedoong.io/${emailId}`
  }

  return (
    <S.Container>
      <S.Contents>
        <S.Header>
          {profileImageUrl && (
            <S.UserImage
              width={72}
              height={72}
              alt="프로필 사진"
              src={profileImageUrl}
              priority
            />
          )}
          <Flex direction={'column'} justify={'center'}>
            <Flex align="center" gap={5}>
              <S.NickName>{name}</S.NickName>
              <Image src={Icons.SettingIcon} alt="setting_icon" />
            </Flex>
            <S.FeedoongUrl>{getFeedoongUrl()}</S.FeedoongUrl>
          </Flex>
        </S.Header>
        <Flex gap={20} direction="column">
          {isLoading ? (
            <Flex direction="column" style={{ width: '100%' }} gap={20}>
              {Array.from({ length: 10 }).map((_, idx) => (
                <SkeletonSubscriptionType key={idx} />
              ))}
            </Flex>
          ) : (
            data?.channels.map((item) => (
              <FeedItem key={item.id} type="subscription" item={item} />
            ))
          )}
        </Flex>
        {!isLoading && data?.channels.length === 0 && (
          <EmptyContents content="구독 중인 채널이 없습니다!" />
        )}
        <Flex style={{ width: '100%', padding: '44px 0' }} justify="center">
          <Paging
            totalPage={totalPage}
            currentPage={currentPage}
            movePage={(page: number) => setCurrentPage(page)}
          />
        </Flex>
      </S.Contents>
    </S.Container>
  )
}

export default MyPageContainer
