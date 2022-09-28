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
        <div style={{ marginRight: '10px' }}>
          <Image
            priority
            src={Icons.MenuIcon}
            alt="close-icon"
            width="12"
            height="12"
          />
        </div>
        MENU
      </S.MenuButton>
      <S.Feedoong onClick={() => router.push('/')}>Feedoong</S.Feedoong>
      <S.MyPageButton onClick={() => router.push('/mypage/account')}>
        <S.UserImage
          width={24}
          height={24}
          alt="프로필 사진"
          src={profileImageUrl}
        />
        {name}
      </S.MyPageButton>
    </S.TopNavContainer>
  )
}

export default TopNavBar
