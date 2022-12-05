import { useEffect, useRef, useState } from 'react'

const useNav = () => {
  const [showSideBar, setShowSideBar] = useState<boolean | null>(null)
  const showSideBarRef = useRef<boolean>(false)
  const topNavRef = useRef<HTMLDivElement>(null)
  const sideMenuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    document.addEventListener('click', onClickNavOutSide)

    return () => {
      document.removeEventListener('click', onClickNavOutSide)
    }
  }, [topNavRef, sideMenuRef])

  useEffect(() => {
    if (typeof showSideBar === 'boolean') {
      showSideBarRef.current = showSideBar
    }
  }, [showSideBar])

  const onClickNavOutSide = (e: MouseEvent) => {
    const target = e.target as Element
    if (
      target &&
      (topNavRef.current?.contains(target) ||
        sideMenuRef.current?.contains(target))
    ) {
      return
    }
    const isShown = showSideBarRef?.current ? false : null
    setShowSideBar(isShown)
  }

  return {
    topNavRef,
    sideMenuRef,
    showSideBar,
    setShowSideBar,
  }
}

export default useNav
