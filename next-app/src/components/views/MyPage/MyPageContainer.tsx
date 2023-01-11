import Image from 'next/image'

import Paging from 'components/common/Paging'
import Flex from 'components/common/Flex'
import List from './List'
import Tab from 'components/common/Tab/Tab'
import useMyPage from './hooks/useMyPage'

import * as S from './MyPageContainer.style'

import Icons from 'assets/icons'

export const MY_PAGE_TABS = [
  { label: '등록한 채널', value: 'channel' },
  { label: '저장한 게시물', value: 'post' },
] as const

export type MyPageTabOption = typeof MY_PAGE_TABS[number]

const MyPageContainer = () => {
  const ITEMS_PER_PAGE = 10
  const {
    listType,
    totalPage,
    currentPage,
    setCurrentPage,
    selectedTab,
    setSelectedTab,
    userProfile,
    feedoongUrl,
    postListData,
    channelListData,
    isLoading,
    isEmptyList,
    emptyContent,
  } = useMyPage({ itemsPerPage: ITEMS_PER_PAGE })

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
              <Image src={Icons.SettingIcon} alt="setting_icon" />
            </Flex>
            <S.FeedoongUrl>{feedoongUrl}</S.FeedoongUrl>
          </Flex>
        </S.Header>

        <S.TabWrapper>
          <Tab
            tabData={MY_PAGE_TABS}
            selectedTab={selectedTab}
            onClick={(tab) => setSelectedTab(tab as MyPageTabOption)}
          />
        </S.TabWrapper>

        <List
          type={listType}
          listData={
            listType === 'channel'
              ? channelListData?.channels
              : postListData?.items
          }
          isLoading={isLoading}
          isEmptyList={isEmptyList}
          emptyContent={emptyContent}
          itemsPerPage={ITEMS_PER_PAGE}
        />

        <Flex style={{ width: '100%', padding: '44px 0' }} justify="center">
          <Paging
            totalPage={totalPage}
            currentPage={currentPage}
            movePage={(page: number) => setCurrentPage(page)}
          />
        </Flex>
      </S.Contents>
    </S.Container>
  )
}

export default MyPageContainer
