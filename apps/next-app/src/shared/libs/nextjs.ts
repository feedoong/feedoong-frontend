export const isAppRouter = () => {
  try {
    // Throws an error if we are not in the App Router context.
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const { cookies } = require('next/headers')
    cookies()
    return true
  } catch (e) {
    return false
  }
}

// eslint-disable-next-line @typescript-eslint/no-var-requires
export const getNextCookies = () => require('next/headers').cookies()
