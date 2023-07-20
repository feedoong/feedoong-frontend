import Image from 'next/legacy/image'
import styled from 'styled-components'

import { ellipsis, getTypographyStyles } from 'styles/fonts'
import { mediaQuery } from 'styles/mediaQuery'
import Anchor from '../Anchor'

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  color: var(--color-font-tertiary);
`

export const PostMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  img {
    border-radius: 50%;
  }
`

export const Author = styled(Anchor)`
  ${getTypographyStyles('Body2_B')}
  ${ellipsis(1)}
  max-width: 75%;
  word-break: break-all;

  ${mediaQuery.mobileL`
    ${ellipsis(1)}
    max-width: 55%;
  `}
`

export const Date = styled.span`
  ${getTypographyStyles('Body2_M')}

  display: inline-block;
  margin-left: 2px;
`

export const CopyLinkButton = styled(Image)`
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
  flex: auto;
`

export const Contents = styled.p`
  ${getTypographyStyles('Body1_M')}
  ${ellipsis(2)}

  color: var(--color-font-secondary);
  word-break: break-all;
`

export const Bookmark = styled(Image)`
  cursor: pointer;
`

export const PostBody = styled.div`
  display: flex;
  justify-content: space-between;
`

export const PostBodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const LeftContainer = styled.div`
  display: flex;
  gap: 10px;
`

export const Thumbnail = styled.img`
  border-radius: 10px;
  object-fit: cover;
`
