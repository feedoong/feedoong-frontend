import Image from 'next/image'
import styled from 'styled-components'
import { colors } from 'styles/colors'
import { getTypographyStyles } from 'styles/fonts'

export const Container = styled.div`
  width: 100%;
  max-width: 626px;
  border-radius: 4px;
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

export const SelectViewType = styled.div`
  display: flex;
  gap: 8px;
`

export const ViewType = styled(Image)`
  cursor: pointer;
`

export const CardContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
`