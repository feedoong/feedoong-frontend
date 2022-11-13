import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'

import Button from 'components/common/Button'

import * as S from './404Container.style'

import Images from 'assets/images'

const Custom404Container = () => {
  const router = useRouter()
  return (
    <>
      <S.ContentWrapper>
        <Image src={Images.Custom404} alt="404Error" />
        <S.MainDescription>
          요청하신 페이지를 찾을 수 없습니다.
        </S.MainDescription>
        <S.SubDescription>
          방문하시려는 페이지의 주소가 잘못 입력되었거나,<br></br>
          페이지의 주소가 변경 혹은 삭제되어 요청하신 페이지를 찾을 수 없습니다.
          <br></br>
          입력하신 주소가 정확한지 다시 한번 확인해 주시기 바랍니다.
        </S.SubDescription>
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

export default Custom404Container
