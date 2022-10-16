import styled from 'styled-components'

import { getTypographyStyles, ellipsis } from 'styles/fonts'
import { colors } from 'styles/colors'

export const Container = styled.div`
  background-color: ${colors.gray100};
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 3px;
  border-radius: 20px;
  width: 100%;
`

export const Title = styled.h2`
  ${getTypographyStyles('Headline3_B')}
  ${ellipsis(1)}

  max-width: 526px;
  color: ${colors.gray800};
`

export const Url = styled.span`
  ${getTypographyStyles('Body2_M')}

  color: ${colors.gray600};
`
