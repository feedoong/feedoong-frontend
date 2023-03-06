import styled, { css } from 'styled-components'

import { colors } from 'styles/colors'
import { getTypographyStyles } from 'styles/fonts'

export const TabContainer = styled.div`
  display: flex;
  width: 100%;
`

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
      width: fit-content;
      color: ${colors.white};
      background-color: ${colors.black};
      ${getTypographyStyles('Body1_B')};
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
      color: ${colors.white};
      ${getTypographyStyles('Body2_B')};
    `}
`

export const VerticalDivider = styled.div`
  width: 1px;
  height: 20px;
  background-color: ${colors.gray800};
`
