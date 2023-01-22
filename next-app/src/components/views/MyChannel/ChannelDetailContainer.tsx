import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import Skeleton from 'react-loading-skeleton'

import Flex from 'components/common/Flex'
import FeedItem from 'components/common/FeedItem/FeedItem'
import * as S from 'components/views/MyPost/PostContainer.style'
import { getChannel, getLikedItems } from 'services/feeds'
import { CACHE_KEYS } from 'services/cacheKeys'
import Paging from 'components/common/Paging'
import { SkeletonCardType, SkeletonGridType } from 'components/common/Skeleton'
import { ITEMS_PER_PAGE } from '../MyPost/PostContainer.const'
import { getWellKnownChannelImg } from 'utils'

import Icons from 'assets/icons'

function PostContainer() {
  const { query } = useRouter()
  const id = query.id as string

  const [currentPage, setCurrentPage] = useState(1)
  const { data, isLoading } = useQuery(
    [CACHE_KEYS.likedItems, { page: currentPage, channel: id }],
    () => getChannel(id, currentPage),
    { enabled: !!id }
  )

  const [selectedCategory, setSelectedCategory] = useState<
    'home' | 'recommended'
  >('home')
  const [selectedViewType, setSelectedViewType] = useState<'card' | 'grid'>(
    'card'
  )

  const isGridView = selectedViewType === 'grid'
  const totalPage = data ? Math.ceil(data.totalCount / ITEMS_PER_PAGE) : 1

  const isChannelProfileImageExist =
    data?.items[0].channelImageUrl ||
    getWellKnownChannelImg(data?.items[0].link ?? '')

  return (
    <S.Container>
      <S.FeedWrapper>
        <S.Header>
          <S.TitleWrapper>
            <S.Title
              $isSelected={selectedCategory === 'home'}
              onClick={() => setSelectedCategory('home')}
            >
              {isLoading ? (
                <Skeleton width={100} />
              ) : (
                <Flex align="center" gap={8}>
                  {isChannelProfileImageExist && (
                    <img
                      alt="채널 로고"
                      src={
                        data?.items[0].channelImageUrl ??
                        getWellKnownChannelImg(data?.items[0].link ?? '')
                      }
                      width={20}
                      height={20}
                      style={{ borderRadius: '50%' }}
                    />
                  )}
                  {data?.items[0]?.channelTitle ?? ''}
                </Flex>
              )}
            </S.Title>
          </S.TitleWrapper>
          <S.SelectViewType>
            <S.ViewType
              alt="카드 뷰"
              src={Icons[!isGridView ? 'CardViewIcon' : 'CardViewIconDeactive']}
              $isSelected={!isGridView}
              onClick={() => setSelectedViewType('card')}
              width={16}
              height={16}
            />
            <S.ViewType
              alt="그리드 뷰"
              src={Icons[isGridView ? 'GridViewIcon' : 'GridViewIconDeactive']}
              $isSelected={isGridView}
              onClick={() => setSelectedViewType('grid')}
              width={16}
              height={16}
            />
          </S.SelectViewType>
        </S.Header>
        <S.CardContainer type={selectedViewType}>
          {isLoading
            ? Array.from({ length: 10 }).map((_, idx) => {
                const Card = isGridView ? SkeletonGridType : SkeletonCardType
                return <Card key={idx} />
              })
            : data?.items.map((item) => (
                <FeedItem key={item.id} type={selectedViewType} item={item} />
              ))}
        </S.CardContainer>
        <Flex justify="center" style={{ width: '100%', padding: '44px 0' }}>
          <Paging
            totalPage={totalPage}
            currentPage={currentPage}
            movePage={(page: number) => setCurrentPage(page)}
          />
        </Flex>
      </S.FeedWrapper>
    </S.Container>
  )
}

export default PostContainer
