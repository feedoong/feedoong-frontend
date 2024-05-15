import NavForApp from './_components/Nav'

interface HasGNBLayoutProps {
  children: React.ReactNode
}

const HasGNBLayout = async ({ children }: HasGNBLayoutProps) => {
  return (
    <>
      <NavForApp />
      {children}
    </>
  )
}

export default HasGNBLayout
