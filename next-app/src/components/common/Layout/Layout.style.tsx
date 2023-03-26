import styled, { css } from 'styled-components'

export const Container = styled.div<{ fullHeight: boolean }>`
  /* border: 1px solid red; */
  /* padding-top: 75px; */

  /* background-color: pink; */
  /* height: 2000px; */
  /* height: calc(100vh - 75px); */

  ${({ fullHeight }) =>
    fullHeight &&
    css`
      padding-top: 0;

      main {
        min-height: 100dvh;
        background-color: green;
        /* height: 100vh; */
        /* height: 100%; */
      }
    `};
`

export const TestContainer = styled.div`
  min-height: calc(100vh - 81px);
  padding-top: 75px; // Nav 높이 만큼

`