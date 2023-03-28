import React from 'react'

import Flex from '../Flex'
import { Z_INDEX } from 'styles/constants'

import * as S from './Notification.style'

import Icons from 'assets/icons'

export type NotificationProps = {
  type?: 'basic' | 'error'
  title: string
  content: JSX.Element
  duration?: number
  position?: 'bottom' | 'top'
  afterClose?: () => void
  onClose?: VoidFunction
}

export const Notification = ({
  type = 'basic',
  title,
  content,
  duration = 5000,
  position = 'bottom',
  onClose,
}: NotificationProps) => {
  return (
    <Flex style={{ zIndex: Z_INDEX.toast }}>
      <S.NotificationWrapper duration={duration}>
        <Flex align="center" justify="between">
          <Flex>
            <S.Icon src={Icons.NotificationIcon} alt="check_icon" height={24} />
            <S.Title>{title}</S.Title>
          </Flex>
          <S.CloseButton src={Icons.Close} alt="close" onClick={onClose} />
        </Flex>

        <S.Content>{content}</S.Content>
      </S.NotificationWrapper>
    </Flex>
  )
}
