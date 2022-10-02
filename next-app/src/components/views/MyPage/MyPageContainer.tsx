import React from 'react'

import InfoRow from './InfoRow'
import * as S from './MyPageContainer.style'
import { useRecoilValue } from 'recoil'
import profile from 'store/atoms/profile'

const MyPageContainer = () => {
  const { name } = useRecoilValue(profile)

  return (
    <S.Container>
      <S.Contents>
        <S.PageTitle>내 정보</S.PageTitle>
        <S.BorderLine />
        <InfoRow title="로그인 계정" value="hong@gmail.com" />
        <div style={{ marginBottom: '60px' }}>
          <InfoRow title="이름" value={name} />
        </div>
        <S.BorderLine />
        <S.ButtonWrap>
          <S.Button>회원 탈퇴</S.Button>
          <S.Button>로그아웃</S.Button>
        </S.ButtonWrap>
      </S.Contents>
    </S.Container>
  )
}

export default MyPageContainer
