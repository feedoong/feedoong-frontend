'use client'

import { usePathname, useRouter } from 'next/navigation'
import { forwardRef, Suspense } from 'react'

import LogoDesktopNoBackground from 'components/common/LogoDesktop'
import { ROUTE } from 'constants/route'
import { getAccessTokenFromCookie } from 'features/auth/token'
import { Profile } from './Profile'

import * as S from './Nav.style'

const enableGoToSignUpButton = (pathname: string | null) =>
  pathname === ROUTE.SIGN_UP || pathname === ROUTE.INTRODUCE

const Nav = forwardRef<HTMLDivElement>(function TopNavBar(props, ref) {
  const router = useRouter()
  const pathname = usePathname()

  return (
    <S.TopNavContainer ref={ref}>
      <S.LogoButton onClick={() => router.push('/')}>
        <LogoDesktopNoBackground color={'var(--color-black)'} />
        <S.Feedoong>Feedoong</S.Feedoong>
      </S.LogoButton>
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
