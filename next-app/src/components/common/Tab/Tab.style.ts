import styled, { css } from 'styled-components'

import { colors } from 'styles/colors'
import { getTypographyStyles } from 'styles/fonts'

export const TabContainer = styled.div``

export const Tab = styled.button<{ isSelected: boolean }>`
  ${getTypographyStyles('Body1_M')};

  all: unset;
  padding: 8px 16px;
  line-height: 24px;
  border-radius: 50px;
  color: ${colors.gray500};
  background-color: ${colors.white};
  cursor: pointer; 

  ${({ isSelected }) =>
    isSelected &&
    css`
    color: ${colors.white};
    background-color: ${colors.black};
    ${getTypographyStyles('Body1_B')};
  `}
`
