import React from 'react'

import * as S from './Tab.style'

export type TabType = { label: string; value: string } 
interface Props {
  tabData: readonly TabType[]
  selectedTab: TabType
  onClick: (tab: TabType) => void;
}

const Tab = ({ tabData, selectedTab, onClick }: Props) => {
  return (
    <S.TabContainer>
      {tabData.map((item) => {
        return (
          <S.Tab
            key={`${item.value}`}
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
