'use client'

import Script from 'next/script'

/**
 *
 * @see useColorMode의 내부 로직을 참고한 스크립트
 * @description app dir에서는 next/script를 page dir에서는 normal script 태그를 사용해야 브라우저에서 인식함.
 * app dir과 page dir을 병행 사용하기 위해서 script 태그를 두 개 사용함.
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
    <>
      <Script
        dangerouslySetInnerHTML={{
          __html: themeInitializerScript,
        }}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: themeInitializerScript,
        }}
      />
    </>
  )
}

export default ColorModeScript
