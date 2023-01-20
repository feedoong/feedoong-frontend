import styled from 'styled-components'
import Image from 'next/legacy/image'

import { colors } from 'styles/colors'
import { Z_INDEX } from 'styles/constants'
import { getTypographyStyles } from 'styles/fonts'
import { mediaQuery } from 'styles/mediaQuery'

export const TopNavContainer = styled.div`
  position: fixed;
  z-index: ${Z_INDEX.navBar};
  width: 100%;
  height: 75px;
  padding: 18px 100px;
  background-color: ${colors.black};
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
  color: ${colors.white};
  border: 0;
  background: none;
  display: flex;
  align-items: center;
  cursor: pointer;
`

export const LogoImage = styled(Image)`
  width: 32px;
  height: 32px;
`

export const Feedoong = styled.span`
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
  font-family: 'Satoshi-Bold';
  margin-left: 4px;
  color: ${colors.white};
  cursor: pointer;
`

export const MyPageButton = styled.div`
  ${getTypographyStyles('Body1_M')};

  display: flex;
  align-items: center;
  color: ${colors.white};
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

export const GoToSignUpButton = styled.span`
  ${getTypographyStyles('Body1_B')};
  color: ${colors.white};
  cursor: pointer;
`
