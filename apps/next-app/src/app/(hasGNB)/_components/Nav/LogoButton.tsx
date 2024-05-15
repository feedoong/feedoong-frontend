'use client'
import { useRouter } from 'next/navigation'

import * as S from 'components/common/Layout/Nav/Nav.style'
import LogoDesktopNoBackground from 'components/common/LogoDesktop'

export const LogoButton = () => {
  const router = useRouter()

  return (
    <S.LogoButton onClick={() => router.push('/')}>
      <LogoDesktopNoBackground color={'var(--color-black)'} />
      <S.Feedoong>Feedoong</S.Feedoong>
    </S.LogoButton>
  )
}
