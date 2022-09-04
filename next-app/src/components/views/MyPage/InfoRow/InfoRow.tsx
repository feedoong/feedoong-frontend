import React from 'react'
import * as S from './InfoRow.style'

interface Props {
  title: string
  value: string
}

const InfoRow = ({ title, value }: Props) => {
  return (
    <S.InfoRowWrap>
      <S.InfoTitle>{title}</S.InfoTitle>
      <S.InfoValue>{value}</S.InfoValue>
    </S.InfoRowWrap>
  )
}

export default InfoRow
