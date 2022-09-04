import React, { useState } from 'react'

import { TopNavBar } from '../TopNavBar/TopNavBar'
import { SideMenuBar } from '../SideNavBar/SideMenuBar'

export const Nav = () => {
  const [showSideBar, setShowSideBar] = useState(false)
  return (
    <>
      <TopNavBar openSideBar={() => setShowSideBar(true)} />
      <SideMenuBar
        closeSideBar={() => setShowSideBar(false)}
        isOpen={showSideBar}
      />
    </>
  )
}
