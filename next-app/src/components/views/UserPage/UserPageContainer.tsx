import Image from 'next/image'
import { useRouter } from 'next/router'
import Skeleton from 'react-loading-skeleton'

import Flex from 'components/common/Flex'
import Tab, { getSelectedTab } from 'components/common/Tab/Tab'
import ChannelList from './List/ChannelList'
import PostList from './List/PostList'
import { getFeedoongUrl } from './UserPageContainer.utils'
import PageContainer from 'components/common/PageContainer'
import { copyToClipboard } from 'components/common/FeedItem/FeedItem.utils'
import {
  useGetUsernameFromPath,
  useGetUserProfileByUsername,
} from 'features/user/userProfile'
import { useCheckIsMyProfile } from 'features/user/useCheckIsMyProfile'

import * as S from './UserPageContainer.style'

import Icons from 'assets/icons'

export const MY_PAGE_TABS = [
  { label: '등록한 채널', value: 'channel', TabComponent: ChannelList },
  { label: '저장한 게시물', value: 'post', TabComponent: PostList },
]

export type MyPageTabOption = (typeof MY_PAGE_TABS)[number] & {
  TabComponent: React.FC
}
export type MyPageListType = (typeof MY_PAGE_TABS)[number]['value']

const UserPageContainer = () => {
  const router = useRouter()
  const username = useGetUsernameFromPath()

  const { data: userProfile, isLoading: isLoadingUserProfile } =
    useGetUserProfileByUsername(username)

  const isMyProfile = useCheckIsMyProfile()

  const selectedTab = getSelectedTab(
    MY_PAGE_TABS,
    router.query.tab as MyPageListType
  ) as MyPageTabOption
  const { TabComponent } = selectedTab

  const profileURL = getFeedoongUrl(userProfile)

  return (
    <PageContainer>
      <S.Contents>
        <S.Header>
          {userProfile?.profileImageUrl && (
            <S.UserImage
              width={72}
              height={72}
              alt="프로필 사진"
              src={userProfile.profileImageUrl}
              priority
            />
          )}
          <Flex direction={'column'} justify={'center'}>
            <Flex align="center" gap={5}>
              <S.NickName>{userProfile?.name}</S.NickName>
              {isMyProfile && (
                <S.SettingButton onClick={() => router.push('/mypage/account')}>
                  <Image src={Icons.SettingIcon} alt="setting_icon" />
                </S.SettingButton>
              )}
            </Flex>
            {isLoadingUserProfile ? (
              <Skeleton width={100} height={10} />
            ) : (
              <S.FeedoongUrl onClick={() => copyToClipboard(profileURL)}>
                {profileURL}
              </S.FeedoongUrl>
            )}
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
    </PageContainer>
  )
}

export default UserPageContainer
