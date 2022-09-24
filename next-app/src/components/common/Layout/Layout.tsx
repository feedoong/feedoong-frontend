import Nav from '../Nav'
import { Container } from './Layout.style'

interface Props {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Nav />
      <Container>
        <main>{children}</main>
      </Container>
    </>
  )
}

export default Layout
