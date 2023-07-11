import { useState, useEffect } from 'react'

import { COLOR_MODE } from 'constants/colorMode'
import type { ColorModeType } from 'types/colorMode'

export const useColorMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    const preferredColorMode = localStorage.getItem(COLOR_MODE)
    const systemColorMode: ColorModeType = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches
      ? 'dark'
      : 'light'
    const colorMode = preferredColorMode ?? systemColorMode
    setIsDarkMode(colorMode === 'dark')
  }, [])

  const toggleColorMode = () => {
    const newMode = !isDarkMode
    localStorage.setItem(`${COLOR_MODE}`, newMode ? 'dark' : 'light')
    document.body.className = newMode ? 'dark' : 'light'
    setIsDarkMode(newMode)
  }

  return {
    isDarkMode,
    toggleColorMode,
  }
}
