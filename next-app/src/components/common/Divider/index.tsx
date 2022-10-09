import styled from 'styled-components'

import { colors } from 'styles/colors'

interface Props {
  thickness?: number
  mt?: number
  mb?: number
}

const Divider = ({ thickness = 1, mt, mb }: Props) => {
  return (
    <Container
      thickness={thickness}
      marginTop={mt ?? 0}
      marginBottom={mb ?? 0}
    />
  )
}

const Container = styled.div<{
  thickness: number
  marginTop: number
  marginBottom: number
}>`
  border-bottom: ${({ thickness }) => thickness}px solid ${colors.gray200};
  margin-top: ${({ marginTop }) => marginTop}px;
  margin-bottom: ${({ marginBottom }) => marginBottom}px;
`

export default Divider
