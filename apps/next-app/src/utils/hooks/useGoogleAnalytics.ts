'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

import * as gtag from '../gtag'

export const useGoogleAnalytics = () => {
  const router = useRouter()

  // useEffect(() => {
  //   const handleRouteChange = (url: string) => {
  //     gtag.pageview(url)
  //   }
  //   router.events.on('routeChangeComplete', handleRouteChange)
  //   router.events.on('hashChangeComplete', handleRouteChange)
  //   return () => {
  //     router.events.off('routeChangeComplete', handleRouteChange)
  //     router.events.off('hashChangeComplete', handleRouteChange)
  //   }
  // }, [router.events])

  return null
}
