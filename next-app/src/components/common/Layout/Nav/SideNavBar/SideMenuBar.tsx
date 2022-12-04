import React, {
  type Dispatch,
  type SetStateAction,
  forwardRef,
  useEffect,
} from 'react'
import Image from 'next/legacy/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

import MenuItem from './MenuItem'
import Anchor from 'components/common/Anchor'

import * as S from './SideMenuBar.style'

import Icons from 'assets/icons'

interface Props {
  setShowSideBar: Dispatch<SetStateAction<boolean | null>>
  isOpen: boolean | null
}

const SideMenuBar = forwardRef<HTMLDivElement, Props>(function SideMenuBar(
  { setShowSideBar, isOpen }: Props,
  ref
) {
  const { pathname } = useRouter()

  useEffect(() => {
    setShowSideBar((prev) => {
      if (prev === true) {
        return false
      }
      return prev
    })
  }, [pathname, setShowSideBar])

  return (
    <S.SideMenuBarContainer isOpen={isOpen} ref={ref}>
      <S.CloseSection>
        <S.CloseButton onClick={() => setShowSideBar(false)}>
          닫기
          <Image src={Icons.Close} alt="close-icon" width="12" height="12" />
        </S.CloseButton>
      </S.CloseSection>
      <S.MenuSection>
        <div>
          <Link href="/mypage/channels" passHref legacyBehavior>
            <Anchor onClick={() => setShowSideBar(false)}>
              <MenuItem title="내가 등록한 채널" iconUrl={Icons.Folder} />
            </Anchor>
          </Link>
          <Link href="/mypage/posts" passHref legacyBehavior>
            <Anchor onClick={() => setShowSideBar(false)}>
              <MenuItem title="내가 저장한 게시물" iconUrl={Icons.Star} />
            </Anchor>
          </Link>
        </div>
        <div>
          <Anchor
            href="https://forms.gle/h4QnoEvdLQPRpt7Q6"
            target="_blank"
            onClick={() => setShowSideBar(false)}
          >
            <MenuItem title="의견 남기기" iconUrl={Icons.SpeechBubble} />
          </Anchor>
          <Link href="/introduce" passHref legacyBehavior>
            <Anchor onClick={() => setShowSideBar(false)}>
              <MenuItem title="피둥을 소개합니다" iconUrl={Icons.Thunder} />
            </Anchor>
          </Link>
        </div>
      </S.MenuSection>
    </S.SideMenuBarContainer>
  )
})

export default SideMenuBar
