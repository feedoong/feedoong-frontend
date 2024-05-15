import { NavForApp } from 'components/common/Layout/Nav'

interface HasGNBLayoutProps {
  children: React.ReactNode
}

const HasGNBLayout = ({ children }: HasGNBLayoutProps) => {
  console.log('hasGNB layout')
  return (
    <>
      <NavForApp />
      {children}
    </>
  )
}

export default HasGNBLayout
