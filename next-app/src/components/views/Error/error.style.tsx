import styled from 'styled-components'

import { getTypographyStyles } from 'styles/fonts'
import Flex from 'components/common/Flex'

export const ContentWrapper = styled(Flex)<{
  errorType?: '404' | '500'
}>`
  width: 100%;
  height: calc(100dvh - 75px);
  background-color: var(--color-surface);
  padding-top: ${({ errorType }) =>
    `calc((100dvh - ${errorType === '500' ? 300 : 400}px) * 0.44)`};
`

export const ContentContainer = styled(Flex)``

export const MainDescription = styled.p`
  ${getTypographyStyles('Headline1_B')};
  color: var(--color-font-primary);
`
