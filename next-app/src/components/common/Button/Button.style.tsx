import styled, { css } from 'styled-components'

import { getTypographyStyles } from 'styles/fonts'
import type { ButtonSize, ButtonStyle } from './Button'

export const Container = styled.button<{
  buttonStyle: ButtonStyle
  size: ButtonSize
  outline: boolean
}>`
  all: unset;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--color-primary-50);
  background: var(--color-primary-500);
  border-radius: 40px;
  cursor: pointer;

  ${({ size }) => sizeMap[size]}
  ${({ buttonStyle }) => styleMap[buttonStyle]}
  ${({ outline, buttonStyle }) => outline && outlineStyleMap[buttonStyle]}
`

export const sizeMap = {
  large: css`
    ${getTypographyStyles('Headline3_B')}
    padding: 16px 20px;
  `,
  medium: css`
    ${getTypographyStyles('Body1_B')}
    padding: 10px 16px;
  `,
  small: css`
    ${getTypographyStyles('Body2_B')}
    padding: 12px 16px;
  `,
  tiny: css`
    ${getTypographyStyles('Caption_B')}
    padding: 8px 16px;
  `,
}

const styleMap = {
  primary: css`
    background: var(--color-primary-600);
  `,
  secondary: css`
    background: var(--color-primary-800);
  `,
  normal: css`
    background: var(--color-primary-500);
  `,
  disabled: css`
    // TODO: disabled attribute랑 합칠지 판단 필요
    background: var(--color-primary-100);
    color: var(--color-gray-500);
    cursor: not-allowed;
  `,
}

const outlineStyleMap = {
  primary: css`
    color: var(--color-primary-800);
    border: 1px solid var(--color-primary-800);
    background-color: var(--color-primary-50);
  `,
  secondary: css`
    color: var(--color-primary-800);
    border: 1px solid var(--color-primary-800);
    background: var(--color-primary-100);
  `,
  normal: css`
    background: none;
    color: var(--color-primary-800);
    border: 1px solid var(--color-primary-800);
  `,
  disabled: css`
    // TODO: disabled attribute랑 합칠지 판단 필요
    background: none;
    color: var(--color-gray-500);
    border: 1px solid var(--color-gray-500);
    cursor: not-allowed;
  `,
}
