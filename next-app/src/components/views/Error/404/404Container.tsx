import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'

import Button from 'components/common/Button'
import * as Error from '../error.style'

import * as S from './404Container.style'

import Images from 'assets/images'

const Custom404Container = () => {
  const router = useRouter()
  return (
    <Error.ContentWrapper gap={24} align="center" direction="column">
      <Error.ContentContainer
        gap={20}
        align="center"
        justify="center"
        direction="column"
      >
        <Image src={Images.error} alt="404Error" />
        <Error.MainDescription>
          요청하신 페이지를 찾을 수 없습니다.
        </Error.MainDescription>
        <S.SubDescription>
          방문하시려는 페이지의 주소가 잘못 입력되었거나,<br></br>
          페이지의 주소가 변경 혹은 삭제되어 요청하신 페이지를 찾을 수 없습니다.
          <br></br>
          입력하신 주소가 정확한지 다시 한번 확인해 주시기 바랍니다.
        </S.SubDescription>
        <Button size="large" onClick={() => router.push('/')}>
          메인으로 이동하기
        </Button>
      </Error.ContentContainer>
    </Error.ContentWrapper>
  )
}

export default Custom404Container
