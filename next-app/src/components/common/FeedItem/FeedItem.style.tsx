import Image from 'next/image'
import styled from 'styled-components'
import { colors } from 'styles/colors'
import { getTypographyStyles } from 'styles/fonts'

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${colors.gray600};
`

export const PostMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

export const Author = styled.span`
  ${getTypographyStyles('Body2_B')}
`

export const Date = styled.span`
  ${getTypographyStyles('Body2_M')}

  display: inline-block;
  margin-left: 2px;
`

export const OptionButton = styled(Image)`
  cursor: pointer;
`

export const Body = styled.div`
  display: flex;
  gap: 10px;
`

export const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const Title = styled.h2`
  ${getTypographyStyles('Headline3_B')}

  color: ${colors.gray800};
`

export const Contents = styled.p`
  ${getTypographyStyles('Body1_M')}

  color: ${colors.gray800};
  white-space: normal;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

export const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
`

export const ReadStatus = styled.span`
  ${getTypographyStyles('Body2_M')}

  color: ${colors.gray600};
`

export const Bookmark = styled(Image)`
  cursor: pointer;
`
