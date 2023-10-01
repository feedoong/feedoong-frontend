import { useIsomorphicLayoutEffect } from '@toss/react'
import { useState } from 'react'

import { isServer } from 'utils/env'

const useMediaQuery = (query: string) => {
  const mediaMatch = isServer() ? { matches: false } : window.matchMedia(query)
  const [matches, setMatches] = useState(mediaMatch.matches)

  useIsomorphicLayoutEffect(() => {
    const handler = (e: MediaQueryListEvent) => setMatches(e.matches)
    if ('addEventListener' in mediaMatch) {
      mediaMatch.addEventListener('change', handler)
    }
    return () => {
      if ('removeEventListener' in mediaMatch) {
        mediaMatch.removeEventListener('change', handler)
      }
    }
  })

  return matches
}

export default useMediaQuery
