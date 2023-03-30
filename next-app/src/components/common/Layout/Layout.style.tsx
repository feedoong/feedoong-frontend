import styled, { css } from 'styled-components'

// export const Container = styled.div<{ fullHeight: boolean }>`
//   min-height: calc(100dvh - 75px);
//   padding-top: 75px; // Nav 높이 만큼

//   ${({ fullHeight }) =>
//     fullHeight &&
//     css`
//       min-height: 100dvh
//       padding-top: 0;

//       main {
//         min-height: 100dvh;
//         background-color: green;
//         /* height: 100vh; */
//         /* height: 100%; */
//       }
//     `};
// `


export const Container = styled.main<{ fullHeight: boolean }>`
  min-height: calc(100dvh - 75px);
  padding-top: 75px; // Nav 높이 만큼

  ${({ fullHeight }) =>
    fullHeight &&
    css`
      min-height: 100dvh
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
