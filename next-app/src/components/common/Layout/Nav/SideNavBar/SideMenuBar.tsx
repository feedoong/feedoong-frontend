import React, {
  type Dispatch,
  type SetStateAction,
  forwardRef,
  useEffect,
} from 'react'
import Image from 'next/legacy/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Cookies from 'js-cookie'

import MenuItem from './MenuItem'
import Anchor from 'components/common/Anchor'
import { AccessToken } from 'constants/auth'

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
  const router = useRouter()
  const accessToken = Cookies.get(AccessToken)

  const movePage = (href: string) => {
    router.push(accessToken ? href : '/signup')
    setShowSideBar(false)
  }

  useEffect(() => {
    setShowSideBar((prev) => {
      if (prev === true) {
        return false
      }
      return prev
    })
  }, [router.pathname, setShowSideBar])

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
          <Link
            href={accessToken ? '/mypage/channels' : '/signup'}
            passHref
            legacyBehavior
          >
            <Anchor onClick={() => setShowSideBar(false)}>
              <MenuItem title="내가 등록한 채널" iconUrl={Icons.Folder} />
            </Anchor>
          </Link>

          <Link
            href={accessToken ? '/mypage/posts' : '/signup'}
            passHref
            legacyBehavior
          >
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
