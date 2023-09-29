import styled from 'styled-components'

import { mediaQuery } from 'styles/mediaQuery'

export const Wrapper = styled.div`
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 100px;

  ${mediaQuery.tablet`
    padding: 40px 20px;
  `}
`
export const Container = styled.div`
  display: flex;
  justify-content: center;
  max-width: 860px;
`

export const HeaderTitle = styled.h1`
  display: inline-block;

  color: var(--light-gray-1000, #2a2528);
  font-family: Satoshi;
  font-size: 60px;
  font-weight: 700;
  line-height: normal;

  word-break: break-all;

  ${mediaQuery.tablet`
    color: var(--light-gray-1000, #2A2528);
    font-feature-settings: 'clig' off, 'liga' off;
    font-family: Pretendard;
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
  `}
`

export const PinkFeedoong = styled.div`
  display: inline-block;
  color: var(--dark-primary-500, #d4608f);
  font-family: Satoshi;
  font-size: 60px;
  font-weight: 700;

  ${mediaQuery.tablet`
    font: inherit;
    color: inherit;
  `}
`

// export const Contents = styled.div`
//   display: flex;
//   justify-content: center;
//   gap: 80px;
//   max-width: 786px;

//   span {
//     line-break: anywhere;
//   }

//   ${mediaQuery.tablet`
//     flex-direction: column;
//     gap: 40px;
//   `}
// `

// export const ImageWrapper = styled.div`
//   position: relative;
//   overflow: hidden;
//   min-height: 400px;
//   flex: 1;

//   img {
//     object-fit: cover;
//   }
// `
// export const BoardWrapper = styled.div`
//   flex: 1;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
// `

// export const Title = styled.h1`
//   margin: 11px 0 20px 0;
//   font-size: 32px;
//   font-weight: 700;

//   color: var(--color-gray-700);
// `
// export const Text = styled.div`
//   color: var(--color-gray-500);

//   span {
//     font-weight: 400;
//     font-size: 20px;
//     line-height: 26px;
//   }
// `
