import Image from 'next/image'
import styled from 'styled-components'
import { ellipsis, getTypographyStyles } from 'styles/fonts'

export const Container = styled.div`
  border-top-right-radius: 32px;
  border-top-left-radius: 32px;
  border-bottom-right-radius: 32px;
  border-bottom-left-radius: 0px;
  overflow: hidden;
`

export const Body = styled.div`
  background-color: var(--color-surface-container-lowest);
  padding: 20px;
  display: flex;
  justify-content: space-between;
`

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 20px 16px;
  background-color: var(--color-surface-container-lowest);
  border-top: 1px solid var(--color-divider);
`

export const Title = styled.p`
  ${getTypographyStyles('Headline3_B')};
  ${ellipsis(1)};
  color: var(--color-font-primary);
`

export const Contents = styled.p`
  ${getTypographyStyles('Body1_M')};
  ${ellipsis(2)};
  color: var(--color-font-secondary);
`

export const Thumbnail = styled.img`
  object-fit: cover;
  border-radius: 16px;
`

export const ChannelTitle = styled.p`
  cursor: pointer;
  ${getTypographyStyles('Body2_B')};
  color: var(--color-font-tertiary);
`

export const SubText = styled.p`
  ${getTypographyStyles('Body2_M')};
  color: var(--color-font-tertiary);
`

export const ImageButton = styled(Image)`
  cursor: pointer;
`
