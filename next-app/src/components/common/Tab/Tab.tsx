import React from 'react'

import * as S from './Tab.style'

type TabItem = Record<string, string>

interface Props<T extends TabItem[]> {
  tabData: T
  selectedTab: T[number]
  onClick: (tab: T[number]) => void
}

const Tab = <T extends TabItem[]>({
  tabData,
  selectedTab,
  onClick,
}: Props<T>) => {
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

export const getSelectedTab = <T extends TabItem[]>(
  tabData: T,
  currentTab?: T[number]['value']
) => {
  return tabData.find((tab) => tab.value === currentTab) || tabData[0]
}
