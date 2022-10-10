import React from 'react'
import * as S from './Toast.style'
import Icons from 'assets/icons'

export type ToastProps = {
  type?: 'basic' | 'error'
  isOpen?: boolean
  content: string
  duration?: number
  position?: { right?: number; left?: number; top?: number; bottom?: number }
  afterClose?: () => void
}

export type ToastActions = {
  show: any
}

const Toast = ({
  type = 'basic',
  isOpen,
  content,
  duration,
  position,
  afterClose,
}: ToastProps) => {
  return (
    <S.ToastWrapper type={type}>
      <S.ToastIcon
        src={type === 'basic' ? Icons.ToastBasic : Icons.ToastError}
        alt="Toast_icon"
      />
      <p>{content}</p>
    </S.ToastWrapper>
  )
}

export default Toast
