import React from 'react'
import styled from 'styled-components'

const InfoRowWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
`
const InfoTitle = styled.span`
  font-size: 20px;
  font-weight: 500;
  color: #8c8c8c;
`

const InfoValue = styled.div`
  width: 320px;
  height: 48px;
  background: #646464;
  border-radius: 30px;
  padding: 15px 20px;
`

type InfoRowProps = {
  title: string
  value: string
}

export const InfoRow = ({ title, value }: InfoRowProps): JSX.Element => {
  return (
    <InfoRowWrap>
      <InfoTitle>{title}</InfoTitle>
      <InfoValue>{value}</InfoValue>
    </InfoRowWrap>
  )
}
