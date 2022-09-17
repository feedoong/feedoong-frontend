import { useState } from 'react'
import styled, { css } from 'styled-components'
import Icons from 'assets/icons'
import Grid from './Grid'
import Card from './Card'
import * as S from './PostContainer.style'

function PostContainer() {
  const [isCard, setIsCard] = useState(true)
  const handleOption = (value: boolean) => setIsCard(value)

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
      <CardContainer>
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
