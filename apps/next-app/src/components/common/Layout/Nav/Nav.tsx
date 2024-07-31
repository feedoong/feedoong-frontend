'use client'

import { ErrorBoundary, Suspense } from '@suspensive/react'
import { useRouter } from 'next/navigation'
import { forwardRef } from 'react'

import LogoDesktopNoBackground from 'components/common/LogoDesktop'
import { ROUTE } from 'constants/route'
import { Profile } from './Profile'

import * as S from './Nav.style'

// pages router용
const Nav = forwardRef<HTMLDivElement>(function TopNavBar(props, ref) {
  const router = useRouter()

  return (
    <S.TopNavContainer ref={ref}>
      <S.LogoButton onClick={() => router.push('/')}>
        <LogoDesktopNoBackground color={'var(--color-black)'} />
        <S.Feedoong>Feedoong</S.Feedoong>
      </S.LogoButton>
      <ErrorBoundary
        fallback={
          <S.GoToSignUpButton onClick={() => router.push(ROUTE.SIGN_UP)}>
            피둥 시작하기
          </S.GoToSignUpButton>
        }
      >
        <Suspense>
          <Profile />
        </Suspense>
      </ErrorBoundary>
    </S.TopNavContainer>
  )
})

export default Nav
