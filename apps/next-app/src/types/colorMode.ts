import type useColors from 'utils/hooks/useColors'

export type ColorModeType = 'dark' | 'light'

export type ColorModeColorKey = keyof ReturnType<typeof useColors>['colorSet']
export type ColorModeColorValue = ReturnType<
  typeof useColors
>['colorSet'][ColorModeColorKey]
