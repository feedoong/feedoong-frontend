import React from 'react'

import * as S from './Dialog.style'

interface Props {
  children: React.ReactNode
}

export const DialogTitle = ({ children }: Props) => {
  return <S.Title>{children}</S.Title>
}
