import styled, { css } from 'styled-components'

export const Container = styled.div<{ fullHeight: boolean }>`
  padding-top: 75px;

  ${({ fullHeight }) =>
    fullHeight &&
    css`
      padding-top: 0;

      main {
        height: 100dvh;
      }
    `};
`
