import React, { useState } from 'react'

import * as S from './Tab.style'

type Tab = { label: string; value: string }
interface Props {
  tabData: Tab[]
  selectedTab: Tab
  onClick: (tab: Tab) => void;
}

const Tab = ({ tabData, selectedTab, onClick }: Props) => {
  // const [selectedTab, setSelectedTab] = useState<Tab>({ label: '', value: '' })

  // const getIsSelected = (value: string) => {
  //   return selectedTab.value === value
  // }

  return (
    <S.TabContainer>
      {tabData.map((item, index) => {
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
