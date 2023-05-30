import { colorMode } from 'constants/colorMode'

export const getPreferredColorMode = () => {
  return localStorage.getItem(`${colorMode}`)
}

export const setColorMode = () => {
  const preferredColorMode = getPreferredColorMode()
  const systemColorMode = window.matchMedia('(prefers-color-scheme: dark)')
    .matches
    ? 'dark'
    : 'light'
  const colorMode = preferredColorMode ?? systemColorMode

  document.body.className = colorMode
  return
}
