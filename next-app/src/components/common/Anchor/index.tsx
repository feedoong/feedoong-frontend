import styled from 'styled-components'

interface Props extends React.HTMLAttributes<HTMLAnchorElement> {
  href?: string
  target?: string
  children: React.ReactNode
}

const Anchor = ({ children, ...rest }: Props) => {
  return (
    <Container target="_self" {...rest}>
      {children}
    </Container>
  )
}

export default Anchor

const Container = styled.a`
  all: unset;
  cursor: pointer;
`
