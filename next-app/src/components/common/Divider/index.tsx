import styled from 'styled-components'

import type { ColorModeColorKey } from 'types/colorMode'

interface Props {
  color?: ColorModeColorKey
  thickness?: number
  mt?: number
  mb?: number
}

const Divider = ({ thickness = 1, mt, mb, color }: Props) => {
  return (
    <Container
      color={color ? `var(${color})` : 'var(--color-divider)'}
      thickness={thickness}
      marginTop={mt ?? 0}
      marginBottom={mb ?? 0}
    />
  )
}

const Container = styled.div<{
  color: string
  thickness: number
  marginTop: number
  marginBottom: number
}>`
  border-bottom: ${({ thickness, color }) => `${thickness}px solid ${color}`};
  margin-top: ${({ marginTop }) => marginTop}px;
  margin-bottom: ${({ marginBottom }) => marginBottom}px;
`

export default Divider
