import { useRouter } from 'next/router'

import Nav from './Nav'
import { requiredAuthMatcher } from 'features/auth/requiredAuthMatcher'

import { Container } from './Layout.style'

interface Props {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  const router = useRouter()
  const isRequiredAuthPage = requiredAuthMatcher(router.pathname)
  const isSignUpPage = router.pathname === '/signup'
  const isIntroducePage = router.pathname === '/introduce'

  return (
    <>
      {(isRequiredAuthPage || isIntroducePage) && <Nav />}
      <Container fullHeight={isSignUpPage}>
        <main>{children}</main>
      </Container>
    </>
  )
}

export default Layout
