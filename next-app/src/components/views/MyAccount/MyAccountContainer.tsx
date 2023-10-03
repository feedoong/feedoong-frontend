import React, { useState } from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'

import Dialog from 'components/common/Dialog'
import Toast from 'components/common/Toast'
import { deleteAccount } from 'services/account'
import { CACHE_KEYS } from 'services/cacheKeys'
import { destroyTokensClientSide } from 'utils/auth'
import { copyToClipboard } from 'components/common/FeedItem/FeedItem.utils'
import PageContainer from 'components/common/PageContainer'
import { useGetUserProfile } from 'features/user/userProfile'
import { getFeedoongUrl } from '../UserPage/UserPageContainer.utils'
import { logoutAction } from 'features/auth/logout'
import Input from 'components/common/Input/Input'
import Button from 'components/common/Button/Button'

import * as S from './MyAccountContainer.style'

const MyAccountContainer = () => {
  const [isOpenDeleteAccountModal, setIsOpenDeleteAccountModal] =
    useState(false)
  const [isEditMode, setIsEditMode] = useState(false)
  // const nickNameRef = useRef<HTMLInputElement>(null)
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
  const { data: userProfile, isLoading } = useGetUserProfile()

  // useEffect(() => {
  //   if (nickNameRef.current && userProfile) {
  //     nickNameRef.current.value = userProfile.name
  //   }
  // }, [userProfile])

  if (isLoading || !userProfile) {
    return null
  }

  const profileURL = getFeedoongUrl(userProfile)

  return (
    <PageContainer>
      <S.Contents>
        <S.PageTitle>내 정보</S.PageTitle>
        <S.Item>
          <span className="label">공개 프로필</span>
          <span className="desc">
            회원님의 프로필을 방문하는 사용자에게 다음 정보가 표시됩니다.
          </span>
        </S.Item>

        <S.Label style={{ display: 'block', marginLeft: '12px' }}>사진</S.Label>
        <S.ProfileImage
          // TODO: 프로필 이미지 변경 기능 추가 (이미지 사진도 API로 따로 받아 노출해야 함)
          src={userProfile.profileImageUrl}
          width={72}
          height={72}
          alt={'profileImage'}
        />
        <S.InfoItemContainer>
          <Input
            readOnly
            value={profileURL}
            label={'피둥 주소'}
            buttonName={'주소 복사'}
            buttonAction={() => copyToClipboard(profileURL)}
          />
          <Input
            // TODO: 사용자 이름 편집 기능 추가 (사용자 이름 값을 API로 따로 받아 노출해야 함)
            // ref={nickNameRef}
            value={userProfile.name}
            readOnly={!isEditMode}
            label={'피둥 닉네임'}
            // FIXME: production에서는 닉네임 편집 기능 일단 보류 (API 생성 후 추가)
            // buttonName={isEditMode ? '저장' : '편집'}
            buttonAction={() => setIsEditMode((prev) => !prev)}
          />
        </S.InfoItemContainer>

        <S.Item>
          <span className="label">계정 정보</span>
          <span className="desc">
            이 정보는 수정이 불가하며, 회원님의 프로필에 표시되지 않습니다.
          </span>
        </S.Item>
        <S.InfoItemContainer>
          <Input readOnly value={userProfile.email} label={'로그인 계정'} />
          <Input readOnly value={userProfile.name} label={'이름'} />
        </S.InfoItemContainer>

        <S.ButtonContainer>
          <Button outline onClick={() => setIsOpenDeleteAccountModal(true)}>
            회원탈퇴
          </Button>
          <Button onClick={() => logoutAction(client)}>로그아웃</Button>
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
          <Button outline onClick={() => setIsOpenDeleteAccountModal(false)}>
            취소
          </Button>
          <Button
            onClick={() => {
              deleteAccountAction()
              setIsOpenDeleteAccountModal(false)
            }}
          >
            회원탈퇴
          </Button>
        </Dialog.Actions>
      </Dialog>
    </PageContainer>
  )
}

export default MyAccountContainer
