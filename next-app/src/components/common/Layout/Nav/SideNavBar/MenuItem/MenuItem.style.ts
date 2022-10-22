import styled from 'styled-components'
import { colors } from 'styles/colors'
import { getTypographyStyles } from 'styles/fonts'

export const MenuItemWrap = styled.div`
  padding: 12px 24px;
  display: flex;
  align-items: center;
`

export const MenuButton = styled.button`
  ${getTypographyStyles('Body1_B')};

  color: ${colors.gray600};
  display: flex;
  align-items: center;
  gap: 8px;
  border: 0;
  background: none;
  cursor: pointer;
`
