import styled from 'styled-components'

import { getTypographyStyles } from 'styles/fonts'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100dvh;
  background-color: var(--color-surface);
  padding: 25px;
`

export const Title = styled.h1`
  font-size: 40px;
  font-weight: 700;
  line-height: 48px;
  color: var(--color-black);
  text-align: center;
  margin-bottom: 11px;
`

export const Subtitle = styled.h2`
  ${getTypographyStyles('Headline3_M')}
  color: var(--color-gray-400);
  text-align: center;
  word-break: keep-all;
`

export const GoogleLoginButton = styled.button`
  all: unset;
  margin: 40px 0;
  padding: 14px 40px;
  border-radius: 30px;
  background: var(--color-black);
  color: var(--color-white);
  cursor: pointer;
`

export const ButtonContentsWrapper = styled.div`
  display: flex;
  gap: 10px;

  p {
    ${getTypographyStyles('Headline3_B')}
  }
`

export const Anchor = styled.a`
  ${getTypographyStyles('Body2_M')}
  color: var(--color-gray-600);
  text-align: center;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`
