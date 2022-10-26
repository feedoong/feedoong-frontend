import styled, { keyframes, css } from 'styled-components'
import { colors } from 'styles/colors'
import { getTypographyStyles } from 'styles/fonts'
import Image from "next/image";

const basicFadeOut = keyframes`
  0% {
    opacity: 1;
    background-color: rgba(33, 35, 34, 0.7);
  }
  70% {
    opacity: 1;
    background-color: rgba(33, 35, 34, 0.7);
  }
  100% {
    opacity: 0;
    background-color: rgba(33, 35, 34, 0);
  }
`

const errorFadeOut = keyframes`
  0% {
    opacity: 1;
    background-color: rgba(225, 73, 66, 0.3);
  }
  70% {
    opacity: 1;
    background-color: rgba(225, 73, 66, 0.3);
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

  width: 500px;
  min-height: 40px;
  border-radius: 10px;
  padding: 12px 16px;
  background: ${({ type }) =>
    type === 'basic' ? 'rgba(33, 35, 34, 0.7)' : 'rgba(225, 73, 66, 0.3)'};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: fixed;
  /* bottom: 50px; */
  /* bottom: ${({ position }) => (position === 'bottom' ? '50px' : '100px')}; */
  animation-name: ${({ type }) =>
    type === 'basic' ? basicFadeOut : errorFadeOut};
  animation-duration: ${({ duration }) => `${duration}ms`};
  animation-fill-mode: forwards;

  ${({ position }) =>
    position === 'bottom' &&
    css`
      bottom: 50px;
    `}

  ${({ position }) =>
    position === 'top' &&
    css`
      top: 150px;
    `}

  p {
    color: ${({ type }) => (type === 'basic' ? colors.white : colors.error)};
  }
`

export const ToastIcon = styled(Image)`
  margin-right: 8px;
`
