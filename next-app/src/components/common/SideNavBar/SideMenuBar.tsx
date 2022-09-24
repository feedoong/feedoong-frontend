import React from 'react'
import Image from 'next/image'
import Icons from 'assets/icons'
import MenuItem from './MenuItem'

import * as S from './SideMenuBar.style'

interface Props {
  closeSideBar: () => void
  isOpen: boolean
}

const SideMenuBar = ({ closeSideBar, isOpen }: Props) => {
  return (
    <S.SideMenuBarContainer isOpen={isOpen}>
      <S.CloseSection>
        <S.CloseButton onClick={closeSideBar}>
          닫기
          <div style={{ marginLeft: '10px' }}>
            <Image src={Icons.Close} alt="close-icon" width="12" height="12" />
          </div>
        </S.CloseButton>
      </S.CloseSection>

      <S.MenuSection>
        <div>
          <MenuItem title="내가 등록한 채널" iconUrl={Icons.Folder} />
          <MenuItem title="내가 저장한 게시물" iconUrl={Icons.Star} />
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
