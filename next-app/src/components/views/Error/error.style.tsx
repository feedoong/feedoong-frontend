import styled from 'styled-components'

import { getTypographyStyles } from 'styles/fonts'
import Flex from 'components/common/Flex'

export const ContentWrapper = styled(Flex)`
  width: 100%;
  height: calc(100dvh - 75px);
  background-color: var(--color-surface);
  padding-top: calc((100dvh - 400px) * 0.4);
`

export const ContentContainer = styled(Flex)``

export const MainDescription = styled.p`
  ${getTypographyStyles('Headline1_B')};
`
