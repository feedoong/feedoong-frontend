import React from 'react'

import Flex from '../Flex'
import { Z_INDEX } from 'styles/constants'

import * as S from './Toast.style'

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
    <Flex justify="center" style={{ zIndex: Z_INDEX.toast }}>
      <S.ToastWrapper type={type} position={position} duration={duration}>
        <S.ToastIcon
          priority
          src={type === 'basic' ? Icons.ToastBasic : Icons.ToastError}
          alt="Toast_icon"
        />
        <p>{content}</p>
      </S.ToastWrapper>
    </Flex>
  )
}
