import Image from 'next/legacy/image'
import styled, { css, type FlattenSimpleInterpolation } from 'styled-components'

import { colors } from 'styles/colors'
import { getTypographyStyles } from 'styles/fonts'
import { mediaQuery } from 'styles/mediaQuery'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const FeedWrapper = styled.div`
  margin: 40px 20px;
  padding: 0 12px;
  max-width: 650px;
  width: 100%;
  border-radius: 4px;

  ${mediaQuery.tablet`
    padding: 0px 20px;
  `}
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

export const Title = styled.h1<{ $isSelected?: boolean }>`
  ${getTypographyStyles('Headline2_B')}

  color: ${({ $isSelected = true }) =>
    $isSelected ? colors.gray900 : colors.gray400};
  cursor: pointer;
`

export const SelectViewType = styled.div`
  display: flex;
  gap: 8px;
`

export const ViewType = styled(Image)<{ $isSelected: boolean }>`
  color: ${({ $isSelected }) =>
    $isSelected ? colors.gray900 : colors.gray400};
  cursor: pointer;
`

const CardLayout: {
  [type in 'card' | 'grid']: FlattenSimpleInterpolation
} = {
  card: css`
    display: flex;
    gap: 20px;
    flex-direction: column;
  `,
  grid: css`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  `,
}

export const CardContainer = styled.ul<{ type?: 'card' | 'grid' }>`
  ${({ type = 'card' }) => CardLayout[type]}
`
