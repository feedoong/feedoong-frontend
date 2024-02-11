export const FEED_ROUTE = {
  MY_FEED: '/feed/me',
  RECOMMENDED_FEED: '/feed/recommended',
  RECOMMENDED_CHANNELS: '/feed/recommended/channels',
  RECOMMENDED_POSTS: '/feed/recommended/posts',
} as const

export const ROUTE = {
  INTRODUCE: '/introduce',
  SIGN_UP: '/signup',
  ...FEED_ROUTE,
} as const
