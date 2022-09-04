import styled from "styled-components"
import { colors } from "styles/colors"
import { getTypographyStyles } from "styles/fonts"

export const MenuItemWrap = styled.div`
  padding: 12px 40px;
  display: flex;
  align-items: center;
`

export const MenuButton = styled.button`
  ${getTypographyStyles('Body1_B')};
  
  color: ${colors.gray600};
  display: flex;
  border: 0;
  background: none;
  cursor: pointer;
`