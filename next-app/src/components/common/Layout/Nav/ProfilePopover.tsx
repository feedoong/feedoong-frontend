import Image from 'next/image'

import Anchor from 'components/common/Anchor'
import Popover from 'components/common/Popover'
import { useGetUserProfile } from 'features/user/userProfile'

import Icons from 'assets/icons'

interface Props {
  children: JSX.Element
}

const ProfilePopover = ({ children }: Props) => {
  const { data: me } = useGetUserProfile()

  return (
    <Popover
      placement="bottom-start"
      render={() => (
        <Popover.Layout>
          <Anchor href={`/${me?.username}`}>
            <Popover.Item
              icon={
                <Image
                  src={Icons.SettingIcon}
                  width={20}
                  height={20}
                  alt="내 프로필"
                  priority
                />
              }
            >
              내 프로필
            </Popover.Item>
          </Anchor>
          <a
            target="_blank"
            href="https://oj8mm.notion.site/FAQ-081c373d745f411e91d47689c2bb53e3"
            rel="noreferrer"
            style={{
              textDecoration: 'none',
            }}
          >
            <Popover.Item
              icon={
                <Image
                  src={Icons.Thunder}
                  width={20}
                  height={20}
                  alt="FAQ"
                  priority
                />
              }
            >
              FAQ
            </Popover.Item>
          </a>
          <a
            target="_blank"
            href="https://discord.gg/jdvnSCjjSx"
            rel="noreferrer"
            style={{
              textDecoration: 'none',
            }}
          >
            <Popover.Item
              icon={
                <Image
                  src={Icons.SpeechBubble}
                  width={20}
                  height={20}
                  alt="FAQ"
                  priority
                />
              }
            >
              커뮤니티로 이동
            </Popover.Item>
          </a>
        </Popover.Layout>
      )}
    >
      {children}
    </Popover>
  )
}

export default ProfilePopover
