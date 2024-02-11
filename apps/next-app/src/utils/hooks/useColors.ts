import { DARK_MODE_COLORS, LIGHT_MODE_COLORS } from 'constants/colorMode'
import { useColorMode } from './useColorMode'

const useColors = () => {
  const { isDarkMode } = useColorMode()

  return {
    colorSet: isDarkMode ? DARK_MODE_COLORS : LIGHT_MODE_COLORS,
    isDarkMode,
  }
}

export default useColors
