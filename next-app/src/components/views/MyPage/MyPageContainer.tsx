import Image from 'next/image'
import { useRouter } from 'next/router'
import { useQuery } from '@tanstack/react-query'
import { useMemo } from 'react'

import Paging from 'components/common/Paging'
import Flex from 'components/common/Flex'
import List from './List'
import Tab from 'components/common/Tab/Tab'
import useList from './List/hook/useList'
import { CACHE_KEYS } from 'services/cacheKeys'
import { getUserInfo, UserProfile } from 'services/auth'

import * as S from './MyPageContainer.style'

import Icons from 'assets/icons'

export const MY_PAGE_TABS = [
  { label: '등록한 채널', value: 'channel' },
  { label: '저장한 게시물', value: 'post' },
] as const

export type MyPageTabOption = typeof MY_PAGE_TABS[number]
export type MyPageListType = typeof MY_PAGE_TABS[number]['value']

const MyPageContainer = () => {
  const ITEMS_PER_PAGE = 10
  const router = useRouter()
  const { data: userProfile } = useQuery<UserProfile>(
    CACHE_KEYS.me,
    getUserInfo,
    {
      enabled: router.pathname !== '/introduce',
    }
  )

  const { listData, isLoading, isEmptyList, emptyContent, totalCount } =
    useList({
      listType: (router.query.tab as MyPageListType) || 'channel',
      currentPage: Number(router.query.page),
    })

  const totalPage = totalCount ? Math.ceil(totalCount / ITEMS_PER_PAGE) : 1

  const getFeedoongUrl = () => {
    const emailId = userProfile?.email.split('@')[0]
    return `feedoong.io/${emailId}`
  }

  const getSelectedTab = () => {
    return (
      MY_PAGE_TABS.find((tab) => tab.value === router.query.tab) ||
      MY_PAGE_TABS[0]
    )
  }

  const feedoongURL = useMemo(getFeedoongUrl, [userProfile?.email])
  const selectedTab = useMemo(getSelectedTab, [router.query.tab])
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
            <S.FeedoongUrl>{feedoongURL}</S.FeedoongUrl>
          </Flex>
        </S.Header>

        <S.TabWrapper>
          <Tab
            tabData={MY_PAGE_TABS}
            selectedTab={selectedTab}
            onClick={(tab) =>
              router.push({
                pathname: router.pathname,
                query: {
                  ...router.query,
                  tab: tab.value,
                },
              })
            }
          />
        </S.TabWrapper>

        <List
          type={(router.query.tab as MyPageListType) || 'channel'}
          listData={listData}
          isLoading={isLoading}
          isEmptyList={isEmptyList}
          emptyContent={emptyContent}
          itemsPerPage={ITEMS_PER_PAGE}
        />

        <Flex style={{ width: '100%', padding: '44px 0' }} justify="center">
          <Paging
            totalPage={totalPage}
            currentPage={Number(router.query.page) || 1}
            movePage={(page: number) =>
              router.push({
                pathname: router.pathname,
                query: {
                  ...router.query,
                  page,
                },
              })
            }
          />
        </Flex>
      </S.Contents>
    </S.Container>
  )
}

export default MyPageContainer
