import { useState } from 'react'
import styled, { css } from 'styled-components'
import Grid from 'components/views/Post/Grid'
import Card from 'components/views/Post/Card'
import Icons from 'assets/icons'
import * as S from 'components/views/Post/PostContainer.style'

type TViewTypes = 'card' | 'grid'

function PostContainer() {
  const [viewType, setViewType] = useState<TViewTypes>('card')
  const handleOption = (value: TViewTypes) => setViewType(value)

  return (
    <S.Container>
      <S.Header>
        <S.Title>내가 등록한 채널</S.Title>
        <S.SelectViewType>
          <S.ViewType
            alt="카드 뷰"
            src={Icons.CardViewIcon}
            width={16}
            height={16}
            onClick={() => handleOption('card')}
          />
          <S.ViewType
            alt="그리드 뷰"
            src={Icons.GridViewIcon}
            width={16}
            height={16}
            onClick={() => handleOption('grid')}
          />
        </S.SelectViewType>
      </S.Header>
      <CardContainer>
        {viewType === 'card' && (
          <>
            <Card />
            <Card />
            <Card />
          </>
        )}

        {viewType === 'grid' && (
          <>
            <Grid />
            <Grid />
            <Grid />
          </>
        )}
      </CardContainer>
    </S.Container>
  )
}

export default PostContainer

// TODO : 추후 S.CardContainer 수정 후, 제거 예정
export const CardContainer = styled.ul<{ isCard?: boolean }>`
  display: flex;
  flex-direction: ${({ isCard }) => isCard && 'column'};
  gap: 20px;

  ${({ isCard }) =>
    !isCard &&
    css`
      flex-wrap: wrap;
    `}
`
