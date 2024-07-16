'use client'

import { useRouter } from 'next/navigation'

import { ROUTE } from 'constants/route'
import * as S from 'components/common/Layout/Nav/Nav.style'

export const GoToSignUpButton = () => {
  const router = useRouter()

  return (
    <S.GoToSignUpButton onClick={() => router.push(ROUTE.SIGN_UP)}>
      피둥 시작하기
    </S.GoToSignUpButton>
  )
}
