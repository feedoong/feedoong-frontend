import httpStatus from 'http-status-codes'

export const isErrorPage = (pathname: string) => {
  return [
    `/${httpStatus.NOT_FOUND}`, // 400
    `/${httpStatus.INTERNAL_SERVER_ERROR}`, // 500
  ].some((path) => {
    return pathname === path
  })
}
