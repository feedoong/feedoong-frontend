import React, { useState } from 'react'
import styled from 'styled-components'

import { TopNav } from './TopNav'
import { SideMenuBar } from './SideNavBar/SideMenuBar'

export const Nav = () => {
  const [showSideBar, setShowSideBar] = useState(false)
  return (
    <>
      <TopNav openSideBar={() => setShowSideBar(true)} />
      {showSideBar && (
        <SideMenuBar closeSideBar={() => setShowSideBar(false)} />
      )}
    </>
  )
}
