import React, { useCallback, useEffect, useRef, useState } from 'react'

import TopNavBar from './TopNavBar'
import SideMenuBar from './SideNavBar'

const Nav = () => {
  const [showSideBar, setShowSideBar] = useState<boolean | null>(null)
  const topNavRef = useRef<HTMLDivElement>(null)
  const sideMenuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    document.addEventListener('click', onClickNavOutSide)

    return () => {
      document.removeEventListener('click', onClickNavOutSide)
    }
  }, [])

  const onClickNavOutSide = (e: MouseEvent) => {
    const target = e.target as Element
    if (
      target &&
      (sideMenuRef.current?.contains(target) ||
        topNavRef.current?.contains(target))
    ) {
      return
    }
    setShowSideBar(false)
  }

  return (
    <>
      <TopNavBar setShowSideBar={setShowSideBar} ref={topNavRef} />
      <SideMenuBar
        setShowSideBar={setShowSideBar}
        isOpen={showSideBar}
        ref={sideMenuRef}
      />
    </>
  )
}

export default Nav
