import styled, { keyframes, css } from 'styled-components'
import Image from 'next/image'

import { colors } from 'styles/colors'
import { getTypographyStyles } from 'styles/fonts'
import { Z_INDEX } from 'styles/constants'

const basicFadeOut = keyframes`
  0% {
    opacity: 1;
    background-color: rgba(0, 0, 0, 0.6);
  }
  70% {
    opacity: 1;
    background-color: rgba(0, 0, 0, 0.6);
  }
  100% {
    opacity: 0;
    background-color: rgba(0, 0, 0, 0.6);
  }
`

const errorFadeOut = keyframes`
  0% {
    opacity: 1;
    background-color: rgba(225, 73, 66, 0.8);
  }
  70% {
    opacity: 1;
    background-color: rgba(225, 73, 66, 0.8);
  }
  100% {
    opacity: 0;
    background-color: rgba(225, 73, 66, 0);
  }
`

export const ToastWrapper = styled.div<{
  type: 'basic' | 'error'
  duration: number
  position: 'bottom' | 'top'
}>`
  ${getTypographyStyles('Body2_M')};

  min-height: 40px;
  /* padding: 8px 20px; */
  border-radius: 16px;
  color: ${colors.white};
  background: ${({ type }) =>
    type === 'basic' ? 'rgba(0, 0, 0, 0.6)' : 'rgba(225, 73, 66, 0.8)'};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 50px;
  animation-name: ${({ type }) =>
    type === 'basic' ? basicFadeOut : errorFadeOut};
  animation-duration: ${({ duration }) => `${duration}ms`};
  animation-fill-mode: forwards;
  z-index: ${Z_INDEX.toast};

  ${({ position }) =>
    position === 'bottom' &&
    css`
      bottom: 50px;
    `}
  ${({ position }) =>
    position === 'top' &&
    css`
      top: 150px;
    `};
`

export const ToastIcon = styled(Image)`
  margin-right: 8px;
`

//////////////////////////////////////////////////////

export const Container = styled.div`
  background-color: var(--color-surface-container-highest);
`
