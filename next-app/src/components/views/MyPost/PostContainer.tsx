import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'

import FeedItem from 'components/common/FeedItem/FeedItem'
import * as S from 'components/views/MyPost/PostContainer.style'
import { getLikedItems } from 'services/feeds'
import Icons from 'assets/icons'
import { cacheKeys } from 'services/cacheKeys'

function PostContainer() {
  const { data, isLoading } = useQuery(cacheKeys.likedItems, getLikedItems)

  const [selectedCategory, setSelectedCategory] = useState<
    'home' | 'recommended'
  >('home')
  const [selectedViewType, setSelectedViewType] = useState<'card' | 'grid'>(
    'card'
  )

  const isGridView = selectedViewType === 'grid'

  return (
    <S.Container>
      <S.FeedWrapper>
        <S.Header>
          <S.TitleWrapper>
            <S.Title
              isSelected={selectedCategory === 'home'}
              onClick={() => setSelectedCategory('home')}
            >
              내가 저장한 게시물
            </S.Title>
          </S.TitleWrapper>
          <S.SelectViewType>
            <S.ViewType
              alt="카드 뷰"
              src={Icons[!isGridView ? 'CardViewIcon' : 'CardViewIconDeactive']}
              isSelected={!isGridView}
              onClick={() => setSelectedViewType('card')}
              width={16}
              height={16}
            />
            <S.ViewType
              alt="그리드 뷰"
              src={Icons[isGridView ? 'GridViewIcon' : 'GridViewIconDeactive']}
              isSelected={isGridView}
              onClick={() => setSelectedViewType('grid')}
              width={16}
              height={16}
            />
          </S.SelectViewType>
        </S.Header>
        <S.CardContainer type={selectedViewType}>
          {isLoading
            ? '로딩 스피너'
            : data?.items.map((item) => {
                return (
                  <FeedItem key={item.id} type={selectedViewType} item={item} />
                )
              })}
        </S.CardContainer>
      </S.FeedWrapper>
    </S.Container>
  )
}

export default PostContainer
