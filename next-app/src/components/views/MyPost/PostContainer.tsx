import { useState } from 'react'

import Grid from 'components/views/MyPost/Grid'
import Card from 'components/views/MyPost/Card'
import FeedItem from 'components/common/FeedItem/FeedItem'
import type { FeedType } from 'components/common/FeedItem/FeedItem'

import Icons from 'assets/icons'
import * as S from 'components/views/MyPost/PostContainer.style'

function PostContainer() {
  const [selectedViewType, setSelectedViewType] = useState<FeedType>('card')

  const isCardView = selectedViewType === 'card'
  const isGridView = selectedViewType === 'grid'

  return (
    <S.Container>
      <S.Header>
        <S.Title>내가 등록한 채널</S.Title>
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
      <S.CardContainer>
        <FeedItem
          type={selectedViewType}
          CardTypeItem={Card}
          GridTypeItem={Grid}
        />
        <FeedItem
          type={selectedViewType}
          CardTypeItem={Card}
          GridTypeItem={Grid}
        />
        <FeedItem
          type={selectedViewType}
          CardTypeItem={Card}
          GridTypeItem={Grid}
        />
      </S.CardContainer>
    </S.Container>
  )
}

export default PostContainer
