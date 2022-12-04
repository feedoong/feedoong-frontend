import { css, CSSProp } from 'styled-components'

const breakpoints: {
  [key: string]: number
} = {
  mobile: 0,
  tablet: 768,
  desktop: 1024,
}

export const mediaQuery = Object.keys(breakpoints).reduce((acc, label) => {
  acc[label] = (literals: TemplateStringsArray, ...placeholders: any[]) =>
    css`
      @media only screen and (max-width: ${breakpoints[label]}px) {
        ${css(literals, ...placeholders)};
      }
    `
  return acc
}, {} as Record<keyof typeof breakpoints, (l: TemplateStringsArray, ...p: any[]) => CSSProp>)
