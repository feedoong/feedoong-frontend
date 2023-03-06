import styled from 'styled-components'

import { colors } from 'styles/colors'
import { getTypographyStyles, ellipsis } from 'styles/fonts'

export const Container = styled.div`
  background-color: ${colors.white};
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  border-radius: 20px;
  border-bottom-left-radius: 0px;
`

export const Title = styled.h2`
  ${getTypographyStyles('Headline3_B')}
  ${ellipsis(1)}

  color: ${colors.gray800};
`
