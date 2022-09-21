import { useState } from 'react'
import Card from 'components/common/Card'
import Grid from 'components/common/Gird'
import Icons from 'assets/icons'
import * as S from 'components/views/Channel/ChannelContainer.style'

function ChannelContainer() {
  const [isCard, setIsCard] = useState(true)
  const handleOption = (value: boolean) => setIsCard(value)

  return (
    <S.Container>
      <S.Header>
        <S.Title>내가 저장한 게시물</S.Title>
        <S.SelectViewType>
          <S.ViewType
            alt="카드 뷰"
            src={Icons.CardViewIcon}
            width={16}
            height={16}
            onClick={() => handleOption(true)}
          />
          <S.ViewType
            alt="그리드 뷰"
            src={Icons.GridViewIcon}
            width={16}
            height={16}
            onClick={() => handleOption(false)}
          />
        </S.SelectViewType>
      </S.Header>
      <S.CardContainer isCard={isCard}>
        {isCard && (
          <>
            <Card />
            <Card />
            <Card />
          </>
        )}

        {!isCard && (
          <>
            <Grid />
            <Grid />
            <Grid />
          </>
        )}
      </S.CardContainer>
    </S.Container>
  )
}

export default ChannelContainer
