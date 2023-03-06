import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'

import Flex from 'components/common/Flex'
import FeedItem from 'components/common/FeedItem/FeedItem'
import { getLikedItems } from 'services/feeds'
import { CACHE_KEYS } from 'services/cacheKeys'
import Paging from 'components/common/Paging'
import { ITEMS_PER_PAGE } from './PostContainer.const'
import { SkeletonCardType } from 'components/common/Skeleton'
import EmptyContents from 'components/common/EmptyContents'
import * as S from 'components/views/MyPost/PostContainer.style'
import type { PrivateItem } from 'types/feeds'

function PostContainer() {
  const [currentPage, setCurrentPage] = useState(1)
  const { data, isLoading } = useQuery(
    [CACHE_KEYS.likedItems, { page: currentPage }],
    () => {
      return getLikedItems(currentPage)
    }
  )

  const totalPage = data ? Math.ceil(data.totalCount / ITEMS_PER_PAGE) : 1
  const isEmpty = !isLoading && data?.items.length === 0

  return (
    <S.Container>
      <S.FeedWrapper>
        <S.Header>
          <S.TitleWrapper>
            <S.Title>내가 저장한 게시물</S.Title>
          </S.TitleWrapper>
        </S.Header>
        <S.CardContainer>
          {isLoading
            ? Array.from({ length: 10 }).map((_, idx) => {
                return <SkeletonCardType key={idx} />
              })
            : data?.items.map((item) => (
                <FeedItem
                  key={item.id}
                  type="card/private"
                  item={item as PrivateItem}
                />
              ))}
        </S.CardContainer>
        {isEmpty && <EmptyContents content="저장된 게시물이 없습니다!" />}
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
