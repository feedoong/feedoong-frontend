import React from 'react'

import Flex from 'components/common/Flex'
import EmptyContents from 'components/common/EmptyContents'

import * as S from './List.style'

export interface Props {
  renderList: () => React.ReactNode
  renderEmptyContent?: (emptyContent?: React.ReactNode) => React.ReactNode
}

const List = ({
  renderList,
  renderEmptyContent = () => <EmptyContents content="데이터가 없습니다" />,
}: Props) => {
  return (
    <S.ListContainer>
      <Flex gap={20} direction="column">
        {renderList()}
      </Flex>
      {renderEmptyContent()}
    </S.ListContainer>
  )
}

export default List
