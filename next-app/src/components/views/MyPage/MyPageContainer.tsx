import Image from 'next/image'
import { useRouter } from 'next/router'

import Flex from 'components/common/Flex'
import Tab, { getSelectedTab } from 'components/common/Tab/Tab'
import ChannelList from './List/ChannelList'
import PostList from './List/PostList'
import { getFeedoongUrl } from './MyPageContainer.utils'
import { useGetUserProfile } from './queries/userProfile'

import * as S from './MyPageContainer.style'

import Icons from 'assets/icons'

export const MY_PAGE_TABS = [
  { label: '등록한 채널', value: 'channel', TabComponent: ChannelList },
  { label: '저장한 게시물', value: 'post', TabComponent: PostList },
]

export type MyPageTabOption = typeof MY_PAGE_TABS[number] & {
  TabComponent: React.FC
}
export type MyPageListType = typeof MY_PAGE_TABS[number]['value']

const MyPageContainer = () => {
  const router = useRouter()
  const { data: userProfile } = useGetUserProfile()

  const selectedTab = getSelectedTab(
    MY_PAGE_TABS,
    router.query.tab as MyPageListType
  ) as MyPageTabOption
  const { TabComponent } = selectedTab

  return (
    <S.Container>
      <S.Contents>
        <S.Header>
          {userProfile?.profileImageUrl && (
            <S.UserImage
              width={72}
              height={72}
              alt="프로필 사진"
              src={userProfile.profileImageUrl || ''}
              priority
            />
          )}
          <Flex direction={'column'} justify={'center'}>
            <Flex align="center" gap={5}>
              <S.NickName>{userProfile?.name || ''}</S.NickName>
              <S.SettingButton onClick={() => router.push('/mypage/account')}>
                <Image src={Icons.SettingIcon} alt="setting_icon" />
              </S.SettingButton>
            </Flex>
            {/* TODO: 클립보드 기능 추가해야 함 */}
            <S.FeedoongUrl>{getFeedoongUrl(userProfile)}</S.FeedoongUrl>
          </Flex>
        </S.Header>

        <S.TabWrapper>
          <Tab
            tabData={MY_PAGE_TABS}
            selectedTab={selectedTab}
            onClick={(tab) => {
              const clickDiffTab = tab.value !== selectedTab.value

              router.push({
                pathname: router.pathname,
                query: {
                  ...router.query,
                  tab: tab.value,
                  ...(clickDiffTab && { page: 1 }),
                },
              })
            }}
          />
        </S.TabWrapper>
        <TabComponent />
      </S.Contents>
    </S.Container>
  )
}

export default MyPageContainer
