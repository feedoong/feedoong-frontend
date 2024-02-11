import React from 'react'

import * as S from './Dialog.style'

interface Props {
  children: React.ReactNode
}

export const DialogActions = ({ children }: Props) => {
  return <S.ActionContainer>{children}</S.ActionContainer>
}
