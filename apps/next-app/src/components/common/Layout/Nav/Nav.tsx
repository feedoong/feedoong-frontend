'use client'

import { useRouter } from 'next/navigation'
import { forwardRef, Suspense } from 'react'

import LogoDesktopNoBackground from 'components/common/LogoDesktop'
import { Profile } from './Profile'
import { getRefreshTokenFromCookie } from 'features/auth/token'

import * as S from './Nav.style'

const Nav = forwardRef<HTMLDivElement>(function TopNavBar(props, ref) {
  const router = useRouter()

  return (
    <S.TopNavContainer ref={ref}>
      <S.LogoButton onClick={() => router.push('/')}>
        <LogoDesktopNoBackground color={'var(--color-black)'} />
        <S.Feedoong>Feedoong</S.Feedoong>
      </S.LogoButton>

      {getRefreshTokenFromCookie() && (
        <Suspense>
          <Profile />
        </Suspense>
      )}
    </S.TopNavContainer>
  )
})

export default Nav
