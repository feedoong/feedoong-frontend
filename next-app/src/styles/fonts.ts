import { css, createGlobalStyle } from 'styled-components'

const PRETENDARD_FONT_FAMILY =
  "Pretendard Variable, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif"

export const TYPOGRAPHY_STYLES = {
  Headline2_B: {
    fontSize: 24,
    lineHeight: 34,
    fontWeight: 600,
  },
  Headline3_B: {
    fontSize: 20,
    lineHeight: 26,
    fontWeight: 600,
  },
  Headline4_B: {
    fontSize: 16,
    lineHeight: 26,
    fontWeight: 600,
  },
  Headline4_M: {
    fontSize: 16,
    lineHeight: 26,
    fontWeight: 400,
  },
  Body1_B: {
    fontSize: 14,
    lineHeight: 24,
    fontWeight: 600,
  },
  Body1_M: {
    fontSize: 14,
    lineHeight: 24,
    fontWeight: 400,
  },
  Body2_B: {
    fontSize: 12,
    lineHeight: 19,
    fontWeight: 600,
  },
  Body2_M: {
    fontSize: 12,
    lineHeight: 19,
    fontWeight: 400,
  },
  Caption_B: {
    fontSize: 10,
    lineHeight: 14,
    fontWeight: 600,
  },
}

export const getTypographyStyles = (
  typography: keyof typeof TYPOGRAPHY_STYLES
) => {
  const { fontSize, lineHeight, fontWeight } = TYPOGRAPHY_STYLES[typography]
  return css`
    font-size: ${fontSize}px;
    line-height: ${lineHeight}px;
    font-weight: ${fontWeight};
    font-family: ${PRETENDARD_FONT_FAMILY};
  `
}

export default createGlobalStyle `
  @font-face {
    font-family: 'CWDangamAsac-Bold';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/CWDangamAsac-Bold.woff')
      format('woff');
  }
`
