'use client'
import { usePathname } from 'next/navigation'

import Nav from './Nav'
import { ROUTE } from 'constants/route'

import { Container } from './Layout.style'

interface Props {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  const pathname = usePathname()

  const { isSignUpPage, isUnderAppRouter } = routerBranch(pathname)
  const hasGNB = !isSignUpPage && !isUnderAppRouter

  return (
    <>
      {hasGNB && <Nav />}
      <Container $fullHeight={!hasGNB}>{children}</Container>
    </>
  )
}

export default Layout

const routerBranch = (pathname: string | null) => {
  return {
    isSignUpPage: pathname === ROUTE.SIGN_UP,
    isUnderAppRouter: pathname === ROUTE.MY_FEED,
    // isRequiredAuthPage: requiredAuthMatcher(pathname),
    // isIntroducePage: pathname === ROUTE.RECOMMENDED_CHANNELS,
    // isErrorPage: isErrorPage(pathname),
  }
}
