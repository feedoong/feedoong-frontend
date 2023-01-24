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
  const { isErrorPage, isIntroducePage, isRequiredAuthPage, isSignUpPage } =
    routerBranch(router.pathname)

  return (
    <>
      {(isRequiredAuthPage || isIntroducePage) && <Nav />}
      <Container fullHeight={isSignUpPage || isErrorPage}>
        <main>{children}</main>
      </Container>
    </>
  )
}

export default Layout

const routerBranch = (pathname: string) => {
  return {
    isRequiredAuthPage: requiredAuthMatcher(pathname),
    isSignUpPage: pathname === '/signup',
    isIntroducePage: pathname === '/introduce',
    isErrorPage: isErrorPage(pathname),
  }
}
