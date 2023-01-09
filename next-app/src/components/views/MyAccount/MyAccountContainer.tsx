import React, { useState } from 'react'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

import Dialog from 'components/common/Dialog'
import Toast from 'components/common/Toast'
import { deleteAccount } from 'services/account'
import { getUserInfo, UserProfile } from 'services/auth'
import { CACHE_KEYS } from 'services/cacheKeys'
import InfoRow from './InfoRow'
import { destroyTokensClientSide } from 'utils/auth'

import * as S from './MyAccountContainer.style'

const MyAccountContainer = () => {
  const [isOpenDeleteAccountModal, setIsOpenDeleteAccountModal] =
    useState(false)

  const { mutate: deleteAccountAction } = useMutation(
    ['deleteAccount'],
    deleteAccount,
    {
      onSuccess: () => {
        Toast.show({ content: 'Successfully delete account' })
        destroyTokensClientSide()
        client.invalidateQueries(CACHE_KEYS.me)
        window.location.href = '/'
      },
    }
  )

  const client = useQueryClient()
  const { data: userProfile, isLoading } = useQuery<UserProfile>(
    CACHE_KEYS.me,
    getUserInfo
  )

  const logoutAction = () => {
    destroyTokensClientSide()

    client.invalidateQueries(CACHE_KEYS.me)
    window.location.href = '/'
  }

  if (isLoading || !userProfile) {
    return null
  }

  return (
    <S.Container>
      <S.Contents>
        <S.PageTitle>내 정보</S.PageTitle>
        <S.BorderLine />
        <InfoRow title="로그인 계정" value={userProfile.email} />
        <div style={{ marginBottom: '60px' }}>
          <InfoRow title="이름" value={userProfile.name} />
        </div>
        <S.BorderLine />
        <S.ButtonWrap>
          <S.Button onClick={() => setIsOpenDeleteAccountModal(true)}>
            회원 탈퇴
          </S.Button>
          <S.Button onClick={() => logoutAction()}>로그아웃</S.Button>
        </S.ButtonWrap>
      </S.Contents>
      <Dialog isOpen={isOpenDeleteAccountModal}>
        <Dialog.Title>정말 탈퇴하시겠습니까?</Dialog.Title>
        <Dialog.Content>
          <p>
            탈퇴하시면 회원님의 모든 기록이 삭제됩니다.<br></br>삭제된 정보는
            복구할 수 없으니<br></br>신중하게 결정해주세요.
          </p>
        </Dialog.Content>
        <Dialog.Actions>
          <button onClick={() => setIsOpenDeleteAccountModal(false)}>
            취소
          </button>
          <button
            className="secondary"
            onClick={() => {
              deleteAccountAction()
              setIsOpenDeleteAccountModal(false)
            }}
          >
            회원탈퇴
          </button>
        </Dialog.Actions>
      </Dialog>
    </S.Container>
  )
}

export default MyAccountContainer
