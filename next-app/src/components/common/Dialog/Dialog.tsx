import React, { ReactNode } from 'react'
import Portal from 'pages/portal'

import * as S from './Dialog.style'

interface Props {
  width?: string
  title: string | string[]
  content?: ReactNode
  cancelButtonLabel?: string
  rightButtonName?: string
  rightButtonBackgroundColor?: string
  onCancel: () => void
  onConfirm: () => void
}

const Dialog = ({
  title,
  width,
  content,
  cancelButtonLabel,
  rightButtonName,
  rightButtonBackgroundColor,
  onCancel,
  onConfirm,
}: Props) => {
  return (
    <Portal selector="#dialog">
      <S.Background>
        <S.DialogWrapper width={width}>
          <S.Title>{title}</S.Title>
          <S.Content>{content}</S.Content>

          <S.ButtonWrapper>
            <S.LeftButton onClick={onCancel}>
              {cancelButtonLabel || '취소'}
            </S.LeftButton>
            <S.RightButton
              onClick={onConfirm}
              background={rightButtonBackgroundColor}
            >
              {rightButtonName || '확인'}
            </S.RightButton>
          </S.ButtonWrapper>
        </S.DialogWrapper>
      </S.Background>
    </Portal>
  )
}

export default Dialog
