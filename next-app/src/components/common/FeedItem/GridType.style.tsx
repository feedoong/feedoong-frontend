import styled from 'styled-components'
import { colors } from 'styles/colors'
import { getTypographyStyles, ellipsis } from 'styles/fonts'

export const Container = styled.div`
  overflow: hidden;
  border-radius: 20px;
  background-color: ${colors.gray100};
  height: 288px;
`

export const GridTypeWrapper = styled.div`
  height: 100%;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 12px;
`

export const Title = styled.h2<{ isImageExist: boolean }>`
  ${getTypographyStyles('Headline3_B')}
  ${({ isImageExist }) => ellipsis(isImageExist ? 3 : 2)}

  color: ${colors.gray800};
`

export const Description = styled.div`
  ${getTypographyStyles('Body1_M')}
  ${ellipsis(5)}
  
  color: ${colors.gray600};
  word-break: break-all;
`
