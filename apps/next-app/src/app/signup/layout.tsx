import type { ReactNode } from 'react'

import * as S from './SignUp.style'

interface Props {
  children: ReactNode
}

const SignUpLayout = ({ children }: Props) => {
  return <S.Wrapper>{children}</S.Wrapper>
}

export default SignUpLayout
