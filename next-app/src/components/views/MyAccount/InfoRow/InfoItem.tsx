import React from 'react'

import Flex from 'components/common/Flex'

import * as S from './InfoItem.style'

interface Props {
  value: string
  labelName: string
  readOnly?: boolean
  buttonName?: string
  buttonAction?: () => void
}

const InfoItem = ({
  value,
  labelName,
  readOnly,
  buttonName,
  buttonAction,
}: Props) => {
  return (
    <S.InfoItemContainer>
      <Flex
        align={'center'}
        justify={'between'}
        style={{ padding: '0 12px', marginBottom: '8px' }}
      >
        <S.SubLabel>{labelName}</S.SubLabel>
        {buttonName && (
          <S.CopyButton onClick={buttonAction}>{buttonName}</S.CopyButton>
        )}
      </Flex>
      <S.Input readOnly={readOnly} value={value} />
    </S.InfoItemContainer>
  )
}

export default InfoItem
