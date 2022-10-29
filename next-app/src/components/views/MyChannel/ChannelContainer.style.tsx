import styled from 'styled-components'

import { colors } from 'styles/colors'
import { getTypographyStyles } from 'styles/fonts'

export const Container = styled.div`
  width: 100%;
  padding: 0 12px;
  max-width: 640px;
  border-radius: 4px;
  margin: 0 auto;
  margin-top: 40px;
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`

export const Title = styled.h1`
  ${getTypographyStyles('Headline2_B')}
  color: ${colors.gray900};
`
