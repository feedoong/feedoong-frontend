import React from 'react'
import * as S from './Dialog.style'

interface Props {
  children: React.ReactNode
}

export const DialogContent = ({ children }: Props) => {
  return <S.Content>{children}</S.Content>
}
