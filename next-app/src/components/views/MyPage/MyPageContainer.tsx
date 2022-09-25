import React, { useState} from 'react'

import InfoRow from './InfoRow'
import Dialog from 'components/common/Dialog'
import * as S from './MyPageContainer.style'
import { colors } from 'styles/colors'

const MyPageContainer = () => {
  const [isOpenDeleteAccountModal, setIsOpenDeleteAccountModal] = useState(false);

  const deleteAccountModal = ( ) => {
    setIsOpenDeleteAccountModal(true);
  }

  return (
    <S.Container>
      <S.Contents>
        <S.PageTitle>내 정보</S.PageTitle>
        <S.BorderLine />
        <InfoRow title="로그인 계정" value="hong@gmail.com" />
        <div style={{ marginBottom: '60px' }}>
          <InfoRow title="이름" value="홍길동" />
        </div>
        <S.BorderLine />
        <S.ButtonWrap>
          <S.Button onClick={deleteAccountModal}>회원 탈퇴</S.Button>
          <S.Button>로그아웃</S.Button>
        </S.ButtonWrap>
      </S.Contents>

      {isOpenDeleteAccountModal && (
        <Dialog 
          title="정말 탈퇴하시겠습니까?" 
          content={<p>탈퇴하시면 회원님의 모든 기록이 삭제됩니다.<br></br>삭제된 정보는 복구할 수 없으니<br></br>신중하게 결정해주세요.</p>}
          rightButtonName="회원 탈퇴"
          rightButtonBackgroundColor={colors.error}
          onCancel={() => setIsOpenDeleteAccountModal(false)}
          onConfirm={() => console.log('탈퇴')}
          />
        )}
    </S.Container>
  )
}

export default MyPageContainer
