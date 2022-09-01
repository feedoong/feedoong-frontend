import styled from 'styled-components'
import { colors } from 'styles/colors'
import { getTypographyStyles } from 'styles/fonts'

export const Container = styled.div`
  background-color: ${colors.gray100};
`

export const Header = styled.div`
  ${getTypographyStyles('Body2_B')}

  background-color  : ${colors.gray600};
`
