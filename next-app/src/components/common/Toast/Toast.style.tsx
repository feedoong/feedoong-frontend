import styled, { keyframes } from 'styled-components'
import { colors } from 'styles/colors'
import { getTypographyStyles } from 'styles/fonts'
import Image from 'next/future/image'

const basicFadeOut = keyframes`
  0% {
    background-color: rgba(33, 35, 34, 0.7);
  }
  70% {
    background-color: rgba(33, 35, 34, 0.7);
  }
  100% {
    background-color: rgba(33, 35, 34, 0);
  }
`

export const ToastWrapper = styled.div<{
  type: 'basic' | 'error'
  duration: number
  position: 'bottom' | 'top'
}>`
  ${getTypographyStyles('Body2_M')};

  width: 500px;
  height: 40px;
  border-radius: 10px;
  padding: 12px 16px;
  background: ${({ type }) =>
    type === 'basic' ? 'rgba(33, 35, 34, 0.7)' : 'rgba(225, 73, 66, 0.3)'};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 50px;
  animation-name: ${basicFadeOut};
  animation-duration: ${({ duration }) => `${duration}ms`};
  animation-fill-mode: forwards;

  p {
    color: ${({ type }) => (type === 'basic' ? colors.white : colors.error)};
  }
`

export const ToastIcon = styled(Image)`
  margin-right: 8px;
`