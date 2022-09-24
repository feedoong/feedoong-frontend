import Image from 'next/image'
import styled, { css } from 'styled-components'
import { colors } from 'styles/colors'
import { getTypographyStyles } from 'styles/fonts'

export const Container = styled.div`
  width: 100%;
  max-width: 626px;
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

export const SelectViewType = styled.div`
  display: flex;
  gap: 8px;
`

export const ViewType = styled(Image)<{ isSelected: boolean }>`
  color: ${({ isSelected }) => (isSelected ? colors.gray900 : colors.gray400)};
  cursor: pointer;
`

const CardLayout: {
  [type in FeedType]: FlattenSimpleInterpolation
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

export const CardContainer = styled.ul<{ type?: FeedType }>`
  ${({ type = 'card' }) => CardLayout[type]}
`
