import styled from 'styled-components'

import { colors } from 'styles/colors'
import { getTypographyStyles, ellipsis } from 'styles/fonts'

export const Container = styled.div`
  width: 100%;
  background-color: ${colors.gray100};
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  border-radius: 20px;
`

export const Title = styled.h2<{ isViewed: boolean }>`
  ${getTypographyStyles('Headline3_B')}
  ${ellipsis(1)}

  color: ${colors.gray800};
  opacity: ${({ isViewed }) => (isViewed ? 0.5 : 1)};
`
