import Image from 'next/image'
import React from 'react'
import { useRouter } from 'next/router'

import * as S from './TopNavBar.style'
import Icons from 'assets/icons'
import { useRecoilValue } from 'recoil'
import profile from 'store/atoms/profile'

interface Props {
  openSideBar: () => void
}

const TopNavBar = ({ openSideBar }: Props) => {
  const router = useRouter()
  const { name, profileImageUrl } = useRecoilValue(profile)

  return (
    <S.TopNavContainer>
      <S.MenuButton onClick={openSideBar}>
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
    </S.TopNavContainer>
  )
}

export default TopNavBar
