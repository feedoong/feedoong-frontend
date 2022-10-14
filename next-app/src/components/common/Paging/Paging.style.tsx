import styled, { css } from 'styled-components'
import { colors } from 'styles/colors'
import { getTypographyStyles } from 'styles/fonts'

export const Page = styled.div<{isActive?: boolean}>`
  ${getTypographyStyles('Body1_B')}
  width: 28px;
  height: 28px;
  border-radius: 50%;
  color: ${colors.gray500};
  background-color: ${colors.gray100};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  ${({ isActive }) => isActive && css`
    color: ${colors.white};
    background-color: ${colors.gray600};
    ${getTypographyStyles('Body1_M')}
  `
} `