import React from 'react'

import Flex from 'components/common/Flex'
import type { MY_PAGE_TABS } from '../MyPageContainer'
import EmptyContents from 'components/common/EmptyContents'
import FeedItem from 'components/common/FeedItem'
import {
  SkeletonCardType,
  SkeletonSubscriptionType,
} from 'components/common/Skeleton'
import { isSubscription, Subscription } from 'types/subscriptions'
import type { Item } from 'types/feeds'

import * as S from './List.style'

export interface Props {
  type: typeof MY_PAGE_TABS[number]['value']
  listData?: Item[] | Subscription[]
  isLoading: boolean
  isEmptyList: boolean
  emptyContent: string
  itemsPerPage: number
}

const List = ({
  type,
  listData,
  isLoading,
  isEmptyList,
  emptyContent,
  itemsPerPage,
}: Props) => {
  const renderSkeleton = () => {
    return Array.from({ length: itemsPerPage }).map((_, idx) => {
      const SkeletonItem =
        type === 'channel' ? SkeletonSubscriptionType : SkeletonCardType
      return <SkeletonItem key={idx} />
    })
  }

  const renderList = () => {
    return listData?.map((item) => {
      if (isSubscription(item)) {
        return <FeedItem key={item.id} type="subscription" item={item} />
      }
      return <FeedItem key={item.id} type="card" item={item} />
    })
  }

  return (
    <S.ListContainer>
      <Flex gap={20} direction="column">
        {isLoading ? renderSkeleton() : renderList()}
      </Flex>
      {isEmptyList && <EmptyContents content={emptyContent} />}
    </S.ListContainer>
  )
}

export default List
