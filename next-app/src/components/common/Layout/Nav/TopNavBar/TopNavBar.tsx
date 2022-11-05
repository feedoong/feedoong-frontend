import React, { type Dispatch, type SetStateAction } from 'react'
import Image from 'next/legacy/image'
import { useRouter } from 'next/router'
import { useQuery } from '@tanstack/react-query'

import * as S from './TopNavBar.style'
import { getUserInfo, type UserProfile } from 'services/auth'
import { CACHE_KEYS } from 'services/cacheKeys'

import Icons from 'assets/icons'

interface Props {
  setShowSideBar: Dispatch<SetStateAction<boolean | null>>
}

const TopNavBar = ({ setShowSideBar }: Props) => {
  const router = useRouter()
  const { data: userProfile } = useQuery<UserProfile>(
    CACHE_KEYS.me,
    getUserInfo
  )

  const name = userProfile?.name
  const profileImageUrl = userProfile?.profileImageUrl

  return (
    <S.TopNavContainer>
      <S.MenuButton onClick={() => setShowSideBar(true)}>
        <S.ImageWrapper>
          <Image
            priority
            src={Icons.Menu}
            alt="close-icon"
            width="18.4"
            height="16.4"
          />
        </S.ImageWrapper>
        MENU
      </S.MenuButton>
      <S.Feedoong onClick={() => router.push('/')}>Feedoong</S.Feedoong>
      {name ? (
        <S.MyPageButton onClick={() => router.push('/mypage/account')}>
          {profileImageUrl && (
            <S.UserImage
              width={24}
              height={24}
              alt="프로필 사진"
              src={profileImageUrl}
            />
          )}
          {name}
        </S.MyPageButton>
      ) : (
        <S.GoToSignUpButton onClick={() => router.push('/signup')}>
          시작하기
        </S.GoToSignUpButton>
      )}
    </S.TopNavContainer>
  )
}

export default TopNavBar
