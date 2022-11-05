import React from 'react'

import * as S from './Toast.style'
import Flex from '../Flex'

import Icons from 'assets/icons'

export type ToastProps = {
  type?: 'basic' | 'error'
  content: string
  duration?: number
  position?: 'bottom' | 'top'
  afterClose?: () => void
}

export const ToastElement = ({
  type = 'basic',
  content,
  duration = 2000,
  position = 'bottom',
}: ToastProps) => {
  return (
    <Flex justify="center">
      <S.ToastWrapper type={type} position={position} duration={duration}>
        <S.ToastIcon
          src={type === 'basic' ? Icons.ToastBasic : Icons.ToastError}
          alt="Toast_icon"
        />
        <p>{content}</p>
      </S.ToastWrapper>
    </Flex>
  )
}
