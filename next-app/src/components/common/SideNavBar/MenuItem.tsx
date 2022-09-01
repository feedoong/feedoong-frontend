import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'

type MenuItemProps = {
  iconUrl: string
  title: string
}

const MenuItemWrap = styled.div`
  padding: 12px 40px;
  display: flex;
  align-items: center;
`

const MenuButton = styled.button`
  font-size: 14px;
  font-weight: 600;
  color: #8c8c8c;
  display: flex;
  border: 0;
  background: none;
  cursor: pointer;
`

export const MenuItem = ({ iconUrl, title }: MenuItemProps) => {
  return (
    <MenuItemWrap>
      <MenuButton>
        <div style={{ marginRight: '10px' }}>
          <Image src={iconUrl} width="14" height="14" alt="menu_icon" />
        </div>
        {title}
      </MenuButton>
    </MenuItemWrap>
  )
}
