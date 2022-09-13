import { ReactNode } from 'react'
import Image from 'next/image'
import Icons from 'assets/icons'
import * as S from './Layout.style'

import testImage from '../../../assets/images/User.png'
export interface ContentsProps {
  children: ReactNode
}

function Top(props: ContentsProps) {
  return (
    <div>
      <S.Top>
        <S.TopContents>
          <Image alt="메뉴 아이콘" src={Icons.Menu} width={20} height={20} />
          <S.Text>MENU</S.Text>
        </S.TopContents>

        <Image alt="Feedoong 로고" src={Icons.Logo} width={117} height={20} />

        <S.TopContents>
          <Image
            alt="테스트용 유저 이미지"
            src={testImage}
            width={20}
            height={20}
          />
          <S.Text>홍길동</S.Text>
        </S.TopContents>
      </S.Top>
      <S.Body>{props.children}</S.Body>
    </div>
  )
}

export default Top
