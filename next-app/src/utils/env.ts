export const isServer = () => {
  return typeof window === 'undefined'
}

export const isProduction = () => {
  return process.env.NEXT_PUBLIC_APP_ENV === 'production'
}
