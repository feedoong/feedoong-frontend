import React, { Children, ReactNode, forwardRef } from 'react'
import Portal from 'pages/portal'
import { DialogTitle } from './DialogTitle'
import { DialogContent } from './ DialogContent'

import * as S from './Dialog.style'
import { DialogActions } from './DialogActions'

interface Props {
  isOpen: boolean
  children: ReactNode
  width?: string
}

const Dialog = forwardRef<HTMLDivElement, Props>(function Dialog(
  { isOpen, children, width },
  ref
) {
  return isOpen ? (
    <Portal selector="#dialog">
      <S.Background>
        <S.DialogContainer width={width} ref={ref}>
          {children}
        </S.DialogContainer>
      </S.Background>
    </Portal>
  ) : null
})

export default Object.assign(Dialog, {
  Title: DialogTitle,
  Content: DialogContent,
  Actions: DialogActions,
})
