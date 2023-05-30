import styled, { css } from 'styled-components'

import { colors } from 'styles/colors'
import { getTypographyStyles } from 'styles/fonts'

export const TabContainer = styled.div`
  display: flex;
`

export const Tab = styled.button<{ isSelected: boolean }>`
  all: unset;
  cursor: pointer;
  padding: 8px 16px;
  line-height: 24px;
  border-radius: 50px;
  color: var(--color-gray-500);
  background-color: var(--color-gray-50);

  ${getTypographyStyles('Body1_M')};

  ${({ isSelected }) =>
    isSelected &&
    css`
      color: var(--color-black-fixed);
      background-color: var(--color-gray-900);
      ${getTypographyStyles('Body1_B')};
    `}
`
