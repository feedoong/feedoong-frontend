export const isErrorPage = (pathname: string) => {
  return ['/404', '/500'].some((path) => {
    return pathname === path
  })
}
