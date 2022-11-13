import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'

import Button from 'components/common/Button'

import * as S from './500Container.style'

import Images from 'assets/images'

const Custom500Container = () => {
  const router = useRouter()
  return (
    <>
      <S.ContentWrapper>
        <Image src={Images.Custom500} alt="500Error" />
        <S.MainDescription>페이지를 표시할 수 없습니다.</S.MainDescription>
      </S.ContentWrapper>
      <Button
        onClick={() => router.push('/')}
        buttonStyle="secondary"
        style={{ padding: '0px 16px', margin: '24px auto' }}
        size="medium"
      >
        메인으로 이동하기
      </Button>
    </>
  )
}

export default Custom500Container
