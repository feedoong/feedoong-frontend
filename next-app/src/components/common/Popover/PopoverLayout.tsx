import styled from 'styled-components'

import { colors } from 'styles/colors'

interface Props extends React.HTMLAttributes<HTMLUListElement> {
  children: React.ReactNode
}

const PopoverLayout = ({ children, ...props }: Props) => {
  return <Container {...props}>{children}</Container>
}

export default PopoverLayout

const Container = styled.ul`
  padding: 12px 0px;
  background: var(--color-surface-container-lowest);
  border: 1px solid var(--color-varients);
  border-radius: 10px;
`
