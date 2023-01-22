import styled from 'styled-components'

import { colors } from 'styles/colors'
import { getTypographyStyles } from 'styles/fonts'

export const SubDescription = styled.div`
  ${getTypographyStyles('Headline3_M')}
  color: ${colors.gray700};
  text-align: center;
`
