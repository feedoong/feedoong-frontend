import React from 'react'

import { InfoRow } from './InfoRow'
import * as S from './MyPageView.style'

export const MyPageView = () => {
  return (
    <S.Container>
      <S.Contents>
        <S.PageTitle>내 정보</S.PageTitle>
        <S.BorderLine />
        <InfoRow title="로그인 계정" value="hong@gmail.com" />
        <InfoRow title="이름" value="홍길동" />
        <S.BorderLine />
        <S.ButtonWrap>
          <S.Button>회원 탈퇴</S.Button>
          <S.Button>로그아웃</S.Button>
        </S.ButtonWrap>
      </S.Contents>
    </S.Container>
  )
}
