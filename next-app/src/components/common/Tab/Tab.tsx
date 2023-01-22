import React from 'react'

import * as S from './Tab.style'

export type TabItem = { label: string; value: string } 
interface Props {
  tabData: readonly TabItem[]
  selectedTab: TabItem
  onClick: (tab: TabItem) => void;
}

const Tab = ({ tabData, selectedTab, onClick }: Props) => {
  return (
    <S.TabContainer>
      {tabData.map((item) => {
        return (
          <S.Tab
            key={item.value}
            isSelected={selectedTab.value === item.value}
            onClick={() => onClick(item)}
          >
            {item.label}
          </S.Tab>
        )
      })}
    </S.TabContainer>
  )
}

export default Tab
