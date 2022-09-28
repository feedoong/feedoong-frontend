import Nav from '../Nav'
import { Container } from './Layout.style'
import { useMemo } from 'react'
import { useRouter } from 'next/router'

interface Props {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  const router = useRouter()
  const isSignUpPage = useMemo(() => router.pathname === '/signup', [router])

  return (
    <>
      {!isSignUpPage && <Nav />}
      <Container isSignUpPage={isSignUpPage}>
        <main>{children}</main>
      </Container>
    </>
  )
}

export default Layout
