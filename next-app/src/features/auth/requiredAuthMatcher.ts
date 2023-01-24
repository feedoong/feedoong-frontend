export const requiredAuthPaths = ['/', '/mypage/:path*']

export const requiredAuthMatcher = (pathname: string) => {
  console.log({ pathname })
  return requiredAuthPaths.some((path) => {
    const regExp = pathToRegExp(path)
    return regExp.test(pathname)
  })
}

const pathToRegExp = (path: string) => {
  return new RegExp(
    /*  1. Replace all "/" with "\/" (escape the slashes)
        2. Replace all ":paramName" with "([^\\/]+)" (match all non-slashes, one or more times)
        3. Add "(?:\\/)?$" to the end of the pattern to match the end of the string */
    '^' + path.replace(/\//g, '\\/').replace(/:\w+/g, '([^\\/]+)') + '(?:\\/)?$'
  )
}
