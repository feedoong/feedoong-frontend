import styled from "styled-components"
import { colors } from "styles/colors"
import { getTypographyStyles } from "styles/fonts"

export const SideMenuBarContainer = styled.div`
  position: fixed;
  z-index: 10;
  background-color: ${colors.gray100};
  width: 300px;
  height: 100%;
`

export const CloseSection = styled.section`
  height: 60px;
  padding: 0 24px;
  background-color: ${colors.gray200};
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

export const CloseButton = styled.button`
  ${getTypographyStyles('Body1_B')};

  display: flex;
  border: 0;
  color: ${colors.gray600};
  cursor: pointer;
`

export const MenuSection = styled.section`
  display: flex;
  flex-direction: column;
  height: calc(100% - 60px);
  padding: 8px 0 28px;
  justify-content: space-between;
`