import styled from 'styled-components'
import { colors } from 'styles/colors'
import { getTypographyStyles } from 'styles/fonts'

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 213px auto 0px;
  gap: 20px;
`

export const MainDescription = styled.p`
  ${getTypographyStyles('Headline1_B')}
`

export const SubDescription = styled.div`
  ${getTypographyStyles('Headline3_M')}
  color: ${colors.gray700};
  text-align: center;
`

