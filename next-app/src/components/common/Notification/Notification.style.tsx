import styled, { keyframes } from 'styled-components'
import Image from 'next/image'

import { colors } from 'styles/colors'
import { getTypographyStyles } from 'styles/fonts'
import { Z_INDEX } from 'styles/constants'

const FadeOut = keyframes`
  0% {
    opacity: 1;
  }
  70% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`

export const NotificationWrapper = styled.div<{
  duration: number
}>`
  ${getTypographyStyles('Body2_M')};

  width: 366px;
  height: 87px;
  padding: 16px 18px;
  border-radius: 16px;
  color: ${colors.gray600};
  background-color: white;

  position: fixed;
  bottom: 40px;
  left: 40px;
  animation-name: ${FadeOut};
  animation-duration: ${({ duration }) => `${duration}ms`};
  animation-fill-mode: forwards;
  z-index: ${Z_INDEX.toast};
`

export const Title = styled.p`
  color: ${colors.primary};
  ${getTypographyStyles('Body1_B')};
`

export const Content = styled.div`
  ${getTypographyStyles('Body2_M')};
  margin-top: 12px;
`

export const Icon = styled(Image)`
  margin-right: 8px;
`

export const CloseButton = styled(Image)`
  cursor: pointer;
`
