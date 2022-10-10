import styled from 'styled-components'
import { colors } from 'styles/colors'
import { getTypographyStyles } from 'styles/fonts'
import Image from 'next/future/image'

export const ToastWrapper = styled.div<{ type: 'basic' | 'error' }>`
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

  p {
    color: ${({ type }) => (type === 'basic' ? colors.white : colors.error)};
  }
`

export const ToastIcon = styled(Image)`
  margin-right: 8px;
`
