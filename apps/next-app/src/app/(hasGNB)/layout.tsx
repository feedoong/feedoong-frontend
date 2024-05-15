import Nav from './_components/Nav'

interface HasGNBLayoutProps {
  children: React.ReactNode
}

const HasGNBLayout = async ({ children }: HasGNBLayoutProps) => {
  return (
    <>
      <Nav />
      {children}
    </>
  )
}

export default HasGNBLayout
