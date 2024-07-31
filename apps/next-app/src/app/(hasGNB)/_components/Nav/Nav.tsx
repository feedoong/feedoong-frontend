'use client'
import { ErrorBoundary } from '@suspensive/react'
import { useRouter } from 'next/navigation'
import { forwardRef, Suspense } from 'react'

import * as S from 'components/common/Layout/Nav/Nav.style'
import { Profile } from 'components/common/Layout/Nav/Profile'
import { ROUTE } from 'constants/route'
import { LogoButton } from './LogoButton'

// NOTE: 서버 컴포넌트로 만들면 클라 측에서 갱신이 안됨
// app router용
const Nav = forwardRef<HTMLDivElement>(function Nav(props, ref) {
  const router = useRouter()

  return (
    <S.TopNavContainer ref={ref}>
      <LogoButton />
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
