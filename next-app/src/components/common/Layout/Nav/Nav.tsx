import React, { useCallback, useState } from 'react'

import TopNavBar from './TopNavBar'
import SideMenuBar from './SideNavBar'

const Nav = () => {
  const [showSideBar, setShowSideBar] = useState<boolean | null>(null)

  const openSideBar = useCallback(() => {
    setShowSideBar(true)
  }, [])

  const closeSideBar = useCallback(() => {
    setShowSideBar(false)
  }, [])

  return (
    <>
      <TopNavBar setShowSideBar={setShowSideBar} />
      <SideMenuBar setShowSideBar={setShowSideBar} isOpen={showSideBar} />
    </>
  )
}

export default Nav
