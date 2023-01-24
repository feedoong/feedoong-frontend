export const requiredAuthPaths = [
  '/',
  '/mypage',
  '/mypage/channels/:id',
  '/mypage/posts/:id',
  '/mypage/account',
]

export const requiredAuthMatcher = (pathname: string) => {
  return requiredAuthPaths.some((path) => {
    const regExp = pathToRegExp(path)
    return regExp.test(pathname)
  })
}

const pathToRegExp = (path: string) => {
  const pathSegments = path.split('/')
  const regExpString = buildRegExpString(pathSegments)

  return new RegExp(`^${regExpString}(?:\\/)?$`)

  function buildRegExpString(pathSegments: string[]) {
    return pathSegments
      .map((segment) => {
        if (segment.startsWith(':')) {
          return '([^\\/]+)'
        }
        return segment
      })
      .join('(?:\\/)?')
  }
}
