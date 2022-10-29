import styled from 'styled-components'
import { getTypographyStyles } from 'styles/fonts'

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 262px auto 0px;
  gap: 20px;
`

export const MainDescription = styled.p`
  ${getTypographyStyles('Headline1_B')}
`
