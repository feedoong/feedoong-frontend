import { ReactNode } from 'react'
import * as S from './Introduce.style'
import Layout from 'components/common/Layout'

interface Props {
  children: ReactNode
}

const IntroduceLayout = ({ children }: Props) => {
  return (
    <S.Wrapper>
      <S.Container>{children}</S.Container>
    </S.Wrapper>
  )
}

export default IntroduceLayout
