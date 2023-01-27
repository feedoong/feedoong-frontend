import { useRouter } from 'next/router'

import Nav from './Nav'
import { requiredAuthMatcher } from 'features/auth/requiredAuthMatcher'
import { isErrorPage } from 'features/errors/errors'

import { Container } from './Layout.style'

interface Props {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  const router = useRouter()

  const { isErrorPage, isSignUpPage } = routerBranch(
    router.pathname
  )
  const disapperGNB = isSignUpPage

  return (
    <>
      {!disapperGNB && <Nav />}
      <Container fullHeight={disapperGNB || isErrorPage}>
        <main>{children}</main>
      </Container>
    </>
  )
}

export default Layout

const routerBranch = (pathname: string) => {
  return {
    isRequiredAuthPage: requiredAuthMatcher(pathname),
    isIntroducePage: pathname === '/introduce',
    isSignUpPage: pathname === '/signup',
    isErrorPage: isErrorPage(pathname),
  }
}
