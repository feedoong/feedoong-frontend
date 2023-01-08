import Image from 'next/image'
import styled from 'styled-components'

import Flex from 'components/common/Flex'
import { colors } from 'styles/colors'
import { getTypographyStyles } from 'styles/fonts'
import { mediaQuery } from 'styles/mediaQuery'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${colors.mainBG};
`

export const Contents = styled.div`
  width: 650px;
  margin: 0 auto;
  padding-top: 60px;
`

export const PageTitle = styled.p`
  ${getTypographyStyles('Headline2_B')};

  color: ${colors.gray900};
  margin-bottom: 60px;
`

export const Item = styled.div`
  gap: 12px;
  display: flex;
  align-items: center;
  margin-bottom: 30px;

  .label {
    ${getTypographyStyles('Headline3_B')}
    color: ${colors.gray900};
  }

  .desc {
    ${getTypographyStyles('Body1_M')}
    color: ${colors.gray700};
  }
`

export const SubLabel = styled.span`
  ${getTypographyStyles('Body1_B')}
  color: ${colors.gray600};
`

export const BorderLine = styled.div`
  border: 1px solid ${colors.gray400};
  margin: 30px 0;
`

export const InfoTitle = styled.span`
  font-size: 20px;
  font-weight: 500;
  color: ${colors.gray600};
`

export const ButtonWrap = styled.div`
  gap: 10px;
  display: flex;
  gap: 12px;
  margin-bottom: 60px;
`

export const UserImage = styled(Image)`
  width: 72px;
  height: 72px;
  border-radius: 50%;
`

export const NickName = styled.span`
  ${getTypographyStyles('Headline1_B')}
  color: ${colors.gray900};
`

export const SettingButton = styled.button`
  all: unset;
  cursor: pointer;
`

export const FeedoongUrl = styled.span`
  ${getTypographyStyles('Body1_M')}
  color: ${colors.gray500};
`

export const TabWrapper = styled.div`
  margin-bottom: 24px;
`
