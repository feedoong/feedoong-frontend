import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'

import Button from 'components/common/Button'
import * as S from '../error.style'

import Images from 'assets/images'

const Custom500Container = () => {
  const router = useRouter()
  return (
    <S.ContentWrapper
      gap={24}
      align="center"
      direction="column"
      errorType="500"
    >
      <S.ContentContainer
        gap={20}
        align="center"
        justify="center"
        direction="column"
      >
        <Image src={Images.error} alt="500Error" />
        <S.MainDescription>페이지를 표시할 수 없습니다.</S.MainDescription>
        <Button onClick={() => router.push('/')} size="large">
          메인으로 이동하기
        </Button>
      </S.ContentContainer>
    </S.ContentWrapper>
  )
}

export default Custom500Container
