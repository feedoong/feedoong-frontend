import Link from 'next/link'
import styled from 'styled-components'
import { colors } from 'styles/colors'
import { Z_INDEX } from 'styles/constants'
import { getTypographyStyles } from 'styles/fonts'
import Image from 'next/image'

export const TopNavContainer = styled.div`
  position: fixed;
  z-index: ${Z_INDEX.navBar};
  width: 100%;
  height: 60px;
  padding: 18px 40px;
  background-color: ${colors.gray900};
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const MenuButton = styled.button`
  ${getTypographyStyles('Headline4_B')}

  color: ${colors.white};
  border: 0;
  background: none;
  display: flex;
  align-items: center;
  cursor: pointer;
`

export const ImageWrapper = styled.div`
  margin-right: 10px;
  display: flex;
  align-items: center;
` 

export const Feedoong = styled.span`
  font-size: 20px;
  font-weight: 700;
  font-family: 'CWDangamAsac-Bold';
  line-height: 24px;
  color: ${colors.white};
  cursor: pointer;
`

export const MyPageButton = styled.div`
  ${getTypographyStyles('Body1_B')};

  display: flex;
  align-items: center;
  color: ${colors.white};
  cursor: pointer;
`
