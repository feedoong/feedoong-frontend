import { useMemo } from 'react'
import { useRouter } from 'next/router'

import Nav from './Nav'

import { Container } from './Layout.style'

interface Props {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  const router = useRouter()
  const isSignUpPage = useMemo(() => router.pathname === '/signup', [router])
  const isOauthPage = useMemo(() => router.pathname === '/oauth', [router])

  return (
    <>
      {!(isSignUpPage || isOauthPage) && <Nav />}
      <Container isSignUpPage={isSignUpPage}>
        <main>{children}</main>
      </Container>
    </>
  )
}

export default Layout
