import React, { useState, useRef, useMemo } from 'react'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

import Dialog from 'components/common/Dialog'
import Toast from 'components/common/Toast'
import { deleteAccount } from 'services/account'
import { getUserInfo, UserProfile } from 'services/auth'
import { CACHE_KEYS } from 'services/cacheKeys'
import { destroyTokensClientSide } from 'utils/auth'
import InfoItem from './InfoItem'
import { Label } from './InfoItem/InfoItem.style'
import Divider from 'components/common/Divider'
import { colors } from 'styles/colors'
import { copyToClipboard } from 'components/common/FeedItem/FeedItem.utils'

import * as S from './MyAccountContainer.style'

const MyAccountContainer = () => {
  const [isOpenDeleteAccountModal, setIsOpenDeleteAccountModal] =
    useState(false)
  const [isEditMode, setIsEditMode] = useState(false)
  const nickNameRef = useRef<HTMLInputElement>(null)
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
    getUserInfo,
    {
      onSuccess: (data) => {
        if (nickNameRef.current) {
          nickNameRef.current.value = data.name
        }
      },
    }
  )

  const logoutAction = () => {
    client.invalidateQueries(CACHE_KEYS.me)

    destroyTokensClientSide()
    window.location.href = '/'
  }

  const getMyProfileURL = () => {
    let emailId = ''
    if (userProfile?.email) {
      ;[emailId] = userProfile?.email.split('@')
    }
    return `feedoong.io/${emailId}`
  }

  const profileURL = useMemo(getMyProfileURL, [userProfile?.email])
  if (isLoading || !userProfile) {
    return null
  }

  return (
    <S.Container>
      <S.Contents>
        <S.PageTitle>내 정보</S.PageTitle>
        <S.Item>
          <span className="label">공개 프로필</span>
          <span className="desc">
            회원님의 프로필을 방문하는 사용자에게 다음 정보가 표시됩니다.
          </span>
        </S.Item>

        <Label style={{ display: 'block', marginLeft: '12px' }}>사진</Label>
        <S.ProfileImage
          // TODO: 프로필 이미지 변경 기능 추가 (이미지 사진도 API로 따로 받아 노출해야 함)
          src={userProfile.profileImageUrl}
          width={72}
          height={72}
          alt={'profileImage'}
        />
        <S.InfoItemContainer>
          <InfoItem
            readOnly
            value={getMyProfileURL()}
            labelName={'피둥 주소'}
            buttonName={'주소 복사'}
            buttonAction={() => copyToClipboard(getMyProfileURL())}
          />
          <InfoItem
            // TODO: 사용자 이름 편집 기능 추가 (사용자 이름 값을 API로 따로 받아 노출해야 함)
            ref={nickNameRef}
            readOnly={!isEditMode}
            labelName={'닉네임'}
            buttonName={isEditMode ? '저장' : '편집'}
            buttonAction={() => setIsEditMode((prev) => !prev)}
          />
        </S.InfoItemContainer>

        <Divider color={colors.gray400} mt={30} mb={30} />

        <S.Item>
          <span className="label">계정 정보</span>
          <span className="desc">
            이 정보는 수정이 불가하며, 회원님의 프로필에 표시되지 않습니다.
          </span>
        </S.Item>
        <S.InfoItemContainer>
          <InfoItem
            readOnly
            value={userProfile.email}
            labelName={'로그인 계정'}
          />
          <InfoItem readOnly value={userProfile.name} labelName={'이름'} />
        </S.InfoItemContainer>

        <Divider color={colors.gray400} mt={30} mb={30} />

        <S.ButtonContainer>
          <S.Button outline onClick={() => setIsOpenDeleteAccountModal(true)}>
            회원탈퇴
          </S.Button>
          <S.Button onClick={() => logoutAction()}>로그아웃</S.Button>
        </S.ButtonContainer>
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
