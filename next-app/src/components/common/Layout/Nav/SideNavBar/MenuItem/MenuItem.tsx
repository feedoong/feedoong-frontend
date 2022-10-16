import React from 'react'
import Image from 'next/image'

import * as S from './MenuItem.style'

interface Props {
  iconUrl: string
  title: string
}

const MenuItem = ({ iconUrl, title }: Props) => {
  return (
    <S.MenuItemWrap>
      <S.MenuButton>
        <div style={{ marginRight: '8px' }}>
          <Image src={iconUrl} width="14" height="14" alt="menu_icon" />
        </div>
        {title}
      </S.MenuButton>
    </S.MenuItemWrap>
  )
}

export default MenuItem
