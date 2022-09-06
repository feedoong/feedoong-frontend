import Image from 'next/image'
import styled from 'styled-components'
import { colors } from 'styles/colors'
import { getTypographyStyles } from 'styles/fonts'

export const Container = styled.div`
  background-color: ${colors.gray100};
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-radius: 20px;
`

export const OptionButton = styled(Image)`
  cursor: pointer;
`

export const Body = styled.div`
  display: flex;
  justify-content: space-between;
`

export const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const Title = styled.h2`
  ${getTypographyStyles('Headline3_B')}

  color: ${colors.gray800};
`

export const Contents = styled.p`
  ${getTypographyStyles('Body1_M')}

  color: ${colors.gray800};
  white-space: normal;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

export const ImageContainer = styled.div`
  min-width: 80px;
  height: 80px;
  background-color: ${colors.gray300};
  border-radius: 10px;
`

export const LeftContainer = styled.div`
  display: flex;
  gap: 10px;
`
