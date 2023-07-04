import { COLOR_MODE } from 'constants/colorMode'

// export const getPreferredColorMode = () => {
//   return localStorage.getItem(`${colorModeKey}`)
// }

export const isDarkMode = () => {
  const preferredColorMode = localStorage.getItem(`${COLOR_MODE}`)
  const systemColorMode = window.matchMedia('(prefers-color-scheme: dark)')
    .matches
    ? 'dark'
    : 'light'
  const colorMode = preferredColorMode ?? systemColorMode
  return colorMode === 'dark'
}

export const ToggleColorMode = () => {
  if (isDarkMode()) {
    localStorage.setItem(`${COLOR_MODE}`, 'light')
    document.body.className = 'light'
  } else {
    localStorage.setItem(`${COLOR_MODE}`, 'dark')
    document.body.className = 'dark'
  }
}
