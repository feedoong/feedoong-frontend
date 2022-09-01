import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'

const TopNavContainer = styled.div`
  width: 100%;
  position: fixed;
  height: 60px;
  padding: 18px 40px;
  background-color: #212322;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const MenuButton = styled.button`
  border: 0;
  background: none;
  color: white;
  font-size: 14px;
  font-weight: 600;
  display: flex;
`

const Feedoong = styled.span`
  font-size: 20px;
  font-weight: 700;
  color: white;
`

const MyPageButton = styled.div`
  display: flex;
  color: white;
  align-items: center;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
`

export const TopNav = ({ openSideBar }: any) => {
  const router = useRouter()
  return (
    <TopNavContainer>
      <MenuButton onClick={openSideBar}>
        <div style={{ marginRight: '10px' }}>
          <Image
            src={'/next-assets/menu-icon.png'}
            alt="close-icon"
            width="12"
            height="12"
          />
        </div>
        MENU
      </MenuButton>
      <Feedoong>Feedoong</Feedoong>
      <MyPageButton onClick={() => router.push('/myPage')}>
        <div
          style={{
            width: '24px',
            height: '24px',
            borderRadius: '50%',
            backgroundColor: 'pink',
            marginRight: '8px',
          }}
        ></div>
        홍길동
      </MyPageButton>
    </TopNavContainer>
  )
}
