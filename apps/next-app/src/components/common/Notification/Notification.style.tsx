import styled, { keyframes } from 'styled-components'
import Image from 'next/image'

import { getTypographyStyles } from 'styles/fonts'
import { Z_INDEX } from 'styles/constants'
import { mediaQuery } from 'styles/mediaQuery'

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

  width: 420px;
  height: 90px;
  padding: 16px 20px;
  border-radius: 32px;
  background-color: var(--color-surface-container-highest);

  position: fixed;
  bottom: 40px;
  left: 40px;
  animation-name: ${FadeOut};
  animation-duration: ${({ duration }) => `${duration}ms`};
  animation-fill-mode: forwards;
  z-index: ${Z_INDEX.toast};

  display: flex;
  flex-direction: column;
  gap: 8px;

  ${mediaQuery.tablet`
    width: 100%;
    height: min-content;
    left: 50%;
    transform: translateX(-50%);
  `}
`

export const Title = styled.p`
  color: var(--color-font-primary);
  ${getTypographyStyles('Headline2_B')};
`

export const Content = styled.div`
  ${getTypographyStyles('Body1_M')};
  color: var(--color-font-primary);
`

export const Icon = styled(Image)`
  margin-right: 8px;
`

export const CloseButton = styled(Image)`
  cursor: pointer;
`
