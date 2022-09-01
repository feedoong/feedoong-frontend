import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import { MenuItem } from './MenuItem'

const SideMenuBarContainer = styled.div`
  position: fixed;
  background-color: #f5f5f5;
  width: 300px;
  height: 100%;
`

const CloseSection = styled.section`
  height: 60px;
  background-color: #ebebeb;
  padding: 0 24px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

const CloseButton = styled.button`
  display: flex;
  border: 0;
  font-size: 14px;
  font-weight: 600;
  color: #8c8c8c;
  cursor: pointer;
`

const MenuSection = styled.section`
  display: flex;
  flex-direction: column;
  height: calc(100% - 60px);
  padding: 8px 0 28px;
  justify-content: space-between;
`

export const SideMenuBar = ({ closeSideBar }: any) => {
  return (
    <SideMenuBarContainer>
      <CloseSection>
        <CloseButton onClick={closeSideBar}>
          닫기
          <div style={{ marginLeft: '10px' }}>
            <Image
              src={'/next-assets/close-icon.png'}
              alt="close-icon"
              width="12"
              height="12"
            />
          </div>
        </CloseButton>
      </CloseSection>

      <MenuSection>
        <div>
          <MenuItem
            title="내가 등록한 채널"
            iconUrl="/next-assets/rss-icon.png"
          />
          <MenuItem
            title="내가 저장한 게시물"
            iconUrl="/next-assets/bookmark-icon.png"
          />
        </div>
        <div>
          <MenuItem
            title="의견 남기기"
            iconUrl="/next-assets/mail-icon.png"
          />
          <MenuItem
            title="피둥을 소개합니다"
            iconUrl="/next-assets/diamond-icon.png"
          />
        </div>
      </MenuSection>
    </SideMenuBarContainer>
  )
}
