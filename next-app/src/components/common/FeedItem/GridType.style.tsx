import styled from 'styled-components'
import { colors } from 'styles/colors'
import { getTypographyStyles, ellipsis } from 'styles/fonts'

export const Container = styled.div`
  overflow: hidden;
  border-radius: 20px;
  background-color: ${colors.gray100};
`

export const GridTypeWrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`

export const Title = styled.h2`
  ${getTypographyStyles('Headline3_B')}
  ${ellipsis(2)}

  color: ${colors.gray800};
`
