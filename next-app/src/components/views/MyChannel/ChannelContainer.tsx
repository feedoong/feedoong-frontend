import { useState } from 'react'

import Icons from 'assets/icons'
import FeedItem from 'components/common/FeedItem'
import type { FeedType } from 'components/common/FeedItem/FeedItem'

import * as S from 'components/views/MyChannel/ChannelContainer.style'
import Grid from '../MyPost/Grid'

function ChannelContainer() {
  const [selectedViewType, setSelectedViewType] = useState<FeedType>('card')

  const isCardView = selectedViewType === 'card'
  const isGridView = selectedViewType === 'grid'

  return (
    <S.Container>
      <S.Header>
        <S.Title>내가 저장한 게시물</S.Title>
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
        <FeedItem type={selectedViewType} GridTypeItem={Grid} />
        <FeedItem type={selectedViewType} GridTypeItem={Grid} />
        <FeedItem type={selectedViewType} GridTypeItem={Grid} />
      </S.CardContainer>
    </S.Container>
  )
}

export default ChannelContainer
