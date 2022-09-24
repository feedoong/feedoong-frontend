import styled, { keyframes } from 'styled-components'
import { colors } from 'styles/colors'
import { Z_INDEX } from 'styles/constants'
import { getTypographyStyles } from 'styles/fonts'

const showUp = keyframes`
  0% {
    transform: translate(-100%, 0);
  }
  100% {
    transform: translate(0, 0);
  }
`

const showOut = keyframes`
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(-100%, 0);
  }
`

export const SideMenuBarContainer = styled.div<{ isOpen: boolean }>`
  position: fixed;
  z-index: ${Z_INDEX.navBar};
  background-color: ${colors.gray100};
  width: 300px;
  height: 100%;
  transform: translateX(-100%);
  animation: 0.7s ${(props) => (props.isOpen ? showUp : showOut)} forwards;
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
