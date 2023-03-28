import { useRouter } from 'next/router'

import Nav from './Nav'
import { ROUTE } from 'constants/route'

import { Container } from './Layout.style'

interface Props {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  const router = useRouter()

  const { isSignUpPage } = routerBranch(router.pathname)
  const hasGNB = !isSignUpPage

  return (
    <>
      {hasGNB && <Nav />}
      <Container fullHeight={!hasGNB}>
        <main>{children}</main>
      </Container>
    </>
  )
}

export default Layout

const routerBranch = (pathname: string) => {
  return {
    isSignUpPage: pathname === ROUTE.SIGN_UP,
    // isRequiredAuthPage: requiredAuthMatcher(pathname),
    // isIntroducePage: pathname === ROUTE.RECOMMENDED_CHANNELS,
    // isErrorPage: isErrorPage(pathname),
  }
}
