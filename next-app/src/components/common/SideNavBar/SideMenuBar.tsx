import React from 'react'
import Image from 'next/image'
import Icons from 'assets/icons'
import { MenuItem } from './MenuItem/MenuItem'

import * as S from './SideMenuBar.style'

export const SideMenuBar = ({ closeSideBar }: any) => {
  return (
    <S.SideMenuBarContainer>
      <S.CloseSection>
        <S.CloseButton onClick={closeSideBar}>
          닫기
          <div style={{ marginLeft: '10px' }}>
            <Image src={Icons.Cancel} alt="close-icon" width="12" height="12" />
          </div>
        </S.CloseButton>
      </S.CloseSection>

      <S.MenuSection>
        <div>
          <MenuItem title="내가 등록한 채널" iconUrl={Icons.RSSIcon} />
          <MenuItem title="내가 저장한 게시물" iconUrl={Icons.Bookmark} />
        </div>
        <div>
          <MenuItem title="의견 남기기" iconUrl={Icons.MailIcon} />
          <MenuItem title="피둥을 소개합니다" iconUrl={Icons.BlingBling} />
        </div>
      </S.MenuSection>
    </S.SideMenuBarContainer>
  )
}
