import styled, { css } from 'styled-components'

type Justify = 'start' | 'end' | 'center' | 'between' | 'around'
type Align = 'start' | 'end' | 'center' | 'baseline'
type Direction = 'row' | 'column'

interface Props {
  children: React.ReactNode
  gap?: number
  justify?: Justify
  align?: Align
  direction?: Direction
  style?: React.CSSProperties
}

const Flex = ({ gap, justify, align, direction, children, style }: Props) => {
  return (
    <Container
      gap={gap}
      justify={justify}
      align={align}
      direction={direction}
      style={style}
    >
      {children}
    </Container>
  )
}

export default Flex

const Container = styled.div<{
  gap?: number
  justify?: Justify
  align?: Align
  direction?: Direction
}>`
  display: flex;
  flex-direction: ${({ direction = 'row' }) => direction};
  justify-content: ${({ justify = 'start' }) => justifyContent[justify]};
  align-items: ${({ align = 'start' }) => alignItems[align]};
  ${({ gap }) =>
    css`
      gap: ${gap}px;
    `}
`

const justifyContent = {
  start: 'flex-start',
  end: 'flex-end',
  center: 'center',
  between: 'space-between',
  around: 'space-around',
} as const

const alignItems = {
  start: 'flex-start',
  end: 'flex-end',
  center: 'center',
  baseline: 'baseline',
} as const
