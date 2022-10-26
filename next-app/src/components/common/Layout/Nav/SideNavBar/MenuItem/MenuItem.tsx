import React from 'react'
import Image from "next/legacy/image";

import * as S from './MenuItem.style'

interface Props {
  iconUrl: string
  title: string
}

const MenuItem = ({ iconUrl, title }: Props) => {
  return (
    <S.MenuItemWrap>
      <S.MenuButton>
        <Image src={iconUrl} width="14" height="14" alt="menu_icon" />
        {title}
      </S.MenuButton>
    </S.MenuItemWrap>
  )
}

export default MenuItem
