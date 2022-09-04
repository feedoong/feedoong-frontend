import { useState } from 'react'

import Card from 'components/common/Card'
import type { CardType } from 'components/common/Card/Card'
import Icons from 'assets/icons'
import * as S from './FeedsContainer.style'

const FeedsContainer = () => {
  const [selectedCategory, setSelectedCategory] = useState<
    'home' | 'recommended'
  >('home')
  const [selectedViewType, setSelectedViewType] = useState<CardType>('card')

  const isCardView = selectedViewType === 'card'
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
              홈 피드
            </S.Title>
            <S.Title
              isSelected={selectedCategory === 'recommended'}
              onClick={() => setSelectedCategory('recommended')}
            >
              추천 채널
            </S.Title>
          </S.TitleWrapper>
          <S.SelectViewType>
            <S.ViewType
              alt="카드 뷰"
              src={Icons[isCardView ? 'CardViewIcon' : 'CardViewIconDeactive']}
              isSelected={isCardView}
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
          <Card type={selectedViewType} />
          <Card type={selectedViewType} />
          <Card type={selectedViewType} />
        </S.CardContainer>
      </S.FeedWrapper>
    </S.Container>
  )
}

export default FeedsContainer
