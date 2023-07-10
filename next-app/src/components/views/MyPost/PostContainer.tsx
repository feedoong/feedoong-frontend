import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'

import Flex from 'components/common/Flex'
import FeedItem from 'components/common/FeedItem/FeedItem'
import { getLikedPosts } from 'services/feeds'
import { CACHE_KEYS } from 'services/cacheKeys'
import Paging from 'components/common/Paging'
import { ITEMS_PER_PAGE } from './PostContainer.const'
import { SkeletonPostType } from 'components/common/Skeleton'
import EmptyContents from 'components/common/EmptyContents'
import * as S from 'components/views/MyPost/PostContainer.style'

function PostContainer() {
  const [currentPage, setCurrentPage] = useState(1)
  const { data, isLoading } = useQuery(
    [CACHE_KEYS.likedPosts, { page: currentPage }],
    () => {
      return getLikedPosts(currentPage)
    }
  )

  const totalPage = data ? Math.ceil(data.totalCount / ITEMS_PER_PAGE) : 1
  const isEmpty = !isLoading && data?.items.length === 0
  // TODO: 해당 Container 사용하는 곳이 없는 것 같음. 확인하고 삭제하기
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
                return <SkeletonPostType key={idx} />
              })
            : data?.items.map((item) => (
                <FeedItem key={item.id} type="post" item={item} />
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
