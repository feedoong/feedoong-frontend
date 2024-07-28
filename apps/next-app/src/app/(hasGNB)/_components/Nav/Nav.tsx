'use client'
import { usePathname, useRouter } from 'next/navigation'
import { forwardRef, Suspense } from 'react'

import * as S from 'components/common/Layout/Nav/Nav.style'
import { Profile } from 'components/common/Layout/Nav/Profile'
import { ROUTE } from 'constants/route'
import { getAccessTokenFromCookie } from 'features/auth/token'
import { LogoButton } from './LogoButton'

const enableGoToSignUpButton = (pathname: string | null) =>
  pathname === ROUTE.SIGN_UP || pathname === ROUTE.INTRODUCE

// NOTE: 서버 컴포넌트로 만들면 클라 측에서 갱신이 안됨
const Nav = forwardRef<HTMLDivElement>(function Nav(props, ref) {
  const pathname = usePathname()
  const router = useRouter()

  return (
    <S.TopNavContainer ref={ref}>
      <LogoButton />
      {enableGoToSignUpButton(pathname) ? (
        <S.GoToSignUpButton onClick={() => router.push(ROUTE.SIGN_UP)}>
          피둥 시작하기
        </S.GoToSignUpButton>
      ) : (
        getAccessTokenFromCookie() && (
          <Suspense>
            <Profile />
          </Suspense>
        )
      )}
    </S.TopNavContainer>
  )
})

export default Nav
