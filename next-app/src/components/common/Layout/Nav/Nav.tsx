import TopNavBar from './TopNavBar'
import SideMenuBar from './SideNavBar'
import useNav from './hooks/useNav'

const Nav = () => {
  const { showSideBar, setShowSideBar, topNavRef, sideMenuRef } = useNav()

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
