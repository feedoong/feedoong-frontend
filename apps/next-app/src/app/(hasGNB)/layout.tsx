import Nav from './_components/Nav'
import Container from './_components/Container'

interface HasGNBLayoutProps {
  children: React.ReactNode
}

const HasGNBLayout = async ({ children }: HasGNBLayoutProps) => {
  return (
    <>
      <Nav />
      <Container>{children}</Container>
    </>
  )
}

export default HasGNBLayout
