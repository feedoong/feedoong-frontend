import React, { forwardRef } from 'react'

import Flex from 'components/common/Flex'

import * as S from './InfoItem.style'

interface Props {
  value?: string
  labelName: string
  readOnly?: boolean
  buttonName?: string
  buttonAction?: () => void
}

const InfoItem = forwardRef<HTMLInputElement, Props>(function InfoItem(
  { value, labelName, readOnly = true, buttonName, buttonAction }: Props,
  ref
) {
  return (
    <S.InfoItemContainer>
      <Flex align={'center'} justify={'between'} style={{ padding: '0 12px' }}>
        <S.Label>{labelName}</S.Label>
        {buttonName && (
          <S.TextButton onClick={buttonAction}>{buttonName}</S.TextButton>
        )}
      </Flex>
      <S.Input ref={ref} readOnly={readOnly} value={value} />
    </S.InfoItemContainer>
  )
})

export default InfoItem
