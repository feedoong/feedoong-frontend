import React, { useEffect } from 'react'
import Image from 'next/legacy/image'
import Link from 'next/link'

import Icons from 'assets/icons'
import MenuItem from './MenuItem'

import * as S from './SideMenuBar.style'
import Anchor from 'components/common/Anchor'
import { useRouter } from 'next/router'

interface Props {
  closeSideBar: () => void
  isOpen: boolean | null
}

const SideMenuBar = ({ closeSideBar, isOpen }: Props) => {
  const { pathname } = useRouter()

  useEffect(() => {
    closeSideBar()
  }, [pathname, closeSideBar])

  return (
    <S.SideMenuBarContainer isOpen={isOpen}>
      <S.CloseSection>
        <S.CloseButton onClick={closeSideBar}>
          닫기
          <Image src={Icons.Close} alt="close-icon" width="12" height="12" />
        </S.CloseButton>
      </S.CloseSection>

      <S.MenuSection>
        <div>
          <Link href="/mypage/channels" passHref legacyBehavior>
            <Anchor onClick={closeSideBar}>
              <MenuItem title="내가 등록한 채널" iconUrl={Icons.Folder} />
            </Anchor>
          </Link>
          <Link href="/mypage/posts" passHref legacyBehavior>
            <Anchor onClick={closeSideBar}>
              <MenuItem title="내가 저장한 게시물" iconUrl={Icons.Star} />
            </Anchor>
          </Link>
        </div>
        <div>
          <MenuItem title="의견 남기기" iconUrl={Icons.SpeechBubble} />
          <MenuItem title="피둥을 소개합니다" iconUrl={Icons.Thunder} />
        </div>
      </S.MenuSection>
    </S.SideMenuBarContainer>
  )
}

export default SideMenuBar
