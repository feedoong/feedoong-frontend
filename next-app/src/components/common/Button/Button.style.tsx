import styled, { css } from 'styled-components'

import { colors } from 'styles/colors'
import { getTypographyStyles } from 'styles/fonts'
import type { ButtonSize, ButtonStyle } from './Button'

export const Container = styled.button<{
  buttonStyle: ButtonStyle
  size: ButtonSize
}>`
  all: unset;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${colors.white};
  border-radius: 30px;
  cursor: pointer;

  ${({ size }) => sizeMap[size]}
  ${({ buttonStyle }) => styleMap[buttonStyle]}
`

const sizeMap = {
  large: css`
    ${getTypographyStyles('Headline3_B')}
    width: 335px;
    height: 54px;
  `,
  medium: css`
    ${getTypographyStyles('Body1_M')}
    width: 105px;
    height: 44px;
  `,
  small: css`
    ${getTypographyStyles('Body2_M')}
    width: 95px;
    height: 40px;
  `,
  tiny: css`
    ${getTypographyStyles('Caption_B')}
    width: 86px;
    height: 32px;
  `,
}

const styleMap = {
  primary: css`
    background: ${colors.primary};
    color: ${colors.white};
  `,
  secondary: css`
    background: ${colors.gray900};
    color: ${colors.white};
  `,
  normal: css`
    background: ${colors.white};
    color: ${colors.gray900};
  `,
  disabled: css`
    // TODO: disabled attribute랑 합칠지 판단 필요
    background: ${colors.gray400};
    color: ${colors.gray600};
    cursor: not-allowed;
  `,
}
