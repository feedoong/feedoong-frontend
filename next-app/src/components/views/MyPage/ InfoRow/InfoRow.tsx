import React from 'react'
import * as S from './InfoRow.style'

export const InfoRow = ({
  title,
  value,
}: {
  title: string
  value: string
}): JSX.Element => {
  return (
    <S.InfoRowWrap>
      <S.InfoTitle>{title}</S.InfoTitle>
      <S.InfoValue>{value}</S.InfoValue>
    </S.InfoRowWrap>
  )
}
