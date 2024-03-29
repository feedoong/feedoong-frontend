'use client'

import Script from 'next/script'

/**
 *
 * @see useColorMode의 내부 로직을 참고한 스크립트
 *
 */

const ColorModeScript = () => {
  const themeInitializerScript = `
      (function () {
        const preferredColorMode = localStorage.getItem('colorMode')
        const systemColorMode = window.matchMedia('(prefers-color-scheme: dark)')
          .matches
          ? 'dark'
          : 'light'
        const colorMode = preferredColorMode ?? systemColorMode
      
        document.documentElement.className = colorMode
        return
      })();
  `
  return (
    <Script
      dangerouslySetInnerHTML={{
        __html: themeInitializerScript,
      }}
    />
  )
}

export default ColorModeScript
