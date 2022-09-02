import React from 'react'
import Image from 'next/image'

import * as S from './MenuItem.style';

export const MenuItem = ({
  iconUrl,
  title,
}: {
  iconUrl: string
  title: string
}) => {
  return (
    <S.MenuItemWrap>
      <S.MenuButton>
        <div style={{ marginRight: '10px' }}>
          <Image src={iconUrl} width="14" height="14" alt="menu_icon" />
        </div>
        {title}
      </S.MenuButton>
    </S.MenuItemWrap>
  )
}
