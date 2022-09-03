import Image from 'next/image'
import styled from 'styled-components'
import { colors } from 'styles/colors'
import { getTypographyStyles } from 'styles/fonts'

export const Container = styled.div`
  display: flex;
  justify-content: center;
`

export const FeedWrapper = styled.div`
  padding: 20px;
  max-width: 626px;
  border-radius: 4px;
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`

export const TitleWrapper = styled.div`
  display: flex;
  gap: 20px;
`

export const Title = styled.h1<{ isSelected: boolean }>`
  ${getTypographyStyles('Headline2_B')}

  color: ${({ isSelected }) => (isSelected ? colors.gray900 : colors.gray400)};
  cursor: pointer;
`

export const SelectViewType = styled.div`
  display: flex;
  gap: 8px;
`

export const ViewType = styled(Image)<{ isSelected: boolean }>`
  color: ${({ isSelected }) => (isSelected ? colors.gray900 : colors.gray400)};
  cursor: pointer;
`

export const CardContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
`
