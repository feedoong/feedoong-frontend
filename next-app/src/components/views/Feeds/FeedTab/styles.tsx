import styled, { css } from 'styled-components'

import { colors } from 'styles/colors'
import { getTypographyStyles } from 'styles/fonts'

export const TabContainer = styled.div`
  display: flex;
  width: 100%;
`

export const Tab = styled.div<{ isSelected: boolean; fullWidth?: boolean }>`
  all: unset;
  cursor: pointer;
  padding: 8px 20px;
  line-height: 24px;
  border-radius: 20px;
  color: var(--color-gray-500);
  background-color: var(--color-gray-50);
  white-space: nowrap;

  ${getTypographyStyles('Body1_M')};

  ${({ isSelected }) =>
    isSelected &&
    css`
      color: var(--color-black-fixed);
      background-color: var(--color-gray-900);
      ${getTypographyStyles('Body1_B')};
    `}

  ${({ fullWidth }) =>
    fullWidth &&
    css`
      width: 100%;
    `}
`

export const SubTab = styled.button<{ isSelected: boolean }>`
  all: unset;

  ${getTypographyStyles('Body2_M')};
  color: ${colors.gray500};

  display: inline-block;
  width: 40px;
  text-align: center;
  cursor: pointer;

  ${({ isSelected }) =>
    isSelected &&
    css`
      color: var(--color-black-fixed);
      ${getTypographyStyles('Body2_B')};
    `}
`

export const VerticalDivider = styled.div`
  width: 1px;
  height: 20px;
  background-color: ${colors.gray800};
`
