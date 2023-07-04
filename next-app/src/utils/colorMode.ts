import { colorModeKey } from 'constants/colorMode'

export const getPreferredColorMode = () => {
  return localStorage.getItem(`${colorModeKey}`)
}

export const getColorMode = () => {
  const preferredColorMode = localStorage.getItem(`${colorModeKey}`)
  const systemColorMode = window.matchMedia('(prefers-color-scheme: dark)')
    .matches
    ? 'dark'
    : 'light'
  return preferredColorMode ?? systemColorMode
}

export const setInitialColorMode = () => {
  const colorMode = getColorMode()
  document.body.className = colorMode
  return
}

export const ToggleColorMode = () => {
  const presentColorMode = getColorMode()

  if (presentColorMode === 'dark') {
    localStorage.setItem(`${colorModeKey}`, 'light')
    document.body.className = 'light'
  } else {
    localStorage.setItem(`${colorModeKey}`, 'dark')
    document.body.className = 'dark'
  }
}
