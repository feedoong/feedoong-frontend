import styled from 'styled-components'
import Image from 'next/legacy/image'

import { Z_INDEX } from 'styles/constants'
import { getTypographyStyles } from 'styles/fonts'
import { mediaQuery } from 'styles/mediaQuery'
import Button from 'components/common/Button/Button'

export const TopNavContainer = styled.div`
  position: fixed;
  z-index: ${Z_INDEX.navBar};
  width: 100%;
  height: 75px;
  padding: 18px 100px;
  background-color: var(--color-surface);
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${mediaQuery.tablet`
    padding: 18px 24px;
  `}
`

export const LogoButton = styled.button`
  ${getTypographyStyles('Body1_B')}

  all: unset;
  border: 0;
  background: none;
  display: flex;
  align-items: center;
  cursor: pointer;
`

export const Feedoong = styled.span`
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
  font-family: Satoshi-Bold;
  margin-left: 4px;
  color: var(--color-black);
  cursor: pointer;
`

export const MyPageButton = styled.div`
  ${getTypographyStyles('Body1_M')};

  display: flex;
  align-items: center;
  color: var(--color-font-secondary);
  cursor: pointer;
  gap: 12px;
`

export const UserName = styled.span`
  ${mediaQuery.mobileL`
    visibility: hidden;
  `}
`

export const UserImage = styled(Image)`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`

export const GoToSignUpButton = styled(Button)`
  ${getTypographyStyles('Body1_B')};
  width: 108px;
  height: 35px;
`
