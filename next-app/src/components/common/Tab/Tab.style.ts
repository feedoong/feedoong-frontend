import styled, { css } from 'styled-components'

import { colors } from 'styles/colors'
import { getTypographyStyles } from 'styles/fonts'

export const TabContainer = styled.div``

export const Tab = styled.button<{ isSelected: boolean }>`
  all: unset;
  cursor: pointer;
  padding: 8px 16px;
  line-height: 24px;
  border-radius: 50px;
  color: ${colors.gray500};
  background-color: ${colors.white};

  ${getTypographyStyles('Body1_M')};

  ${({ isSelected }) =>
    isSelected &&
    css`
      color: ${colors.white};
      background-color: ${colors.black};
      ${getTypographyStyles('Body1_B')};
    `}
`
