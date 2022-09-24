import React from 'react'

import * as S from './Dialog.style'

interface Props {
  title: string;
}

const Dialog = ({ title }: Props) => {
  return (<S.DialogWrapper>
    <S.Title></S.Title>
  </S.DialogWrapper>)
}

export default Dialog
