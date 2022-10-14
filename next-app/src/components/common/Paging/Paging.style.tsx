import styled, { css } from 'styled-components'
import { colors } from 'styles/colors'
import { getTypographyStyles } from 'styles/fonts'

export const Page = styled.div<{isActive?: boolean, isImage: boolean }>`
  ${getTypographyStyles('Body1_M')}
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
    ${getTypographyStyles('Body1_B')}
    color: ${colors.white};
    background-color: ${colors.gray600};
  `}

  ${({ isImage }) => isImage && css`
    background: none;
  `}
`
