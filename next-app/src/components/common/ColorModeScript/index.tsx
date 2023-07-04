const ColorModeScript = () => {
  const themeInitializerScript = `
      (function () {
        const preferredColorMode = localStorage.getItem('colorMode')
        const systemColorMode = window.matchMedia('(prefers-color-scheme: dark)')
          .matches
          ? 'dark'
          : 'light'
        const colorMode = preferredColorMode ?? systemColorMode
      
        document.body.className = colorMode
        return
      })();
  `
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: themeInitializerScript,
      }}
    />
  )
}

export default ColorModeScript
