import styled from 'styled-components'

import { colors } from 'styles/colors'
import { mediaQuery } from 'styles/mediaQuery'

export const Wrapper = styled.div`
  margin: 100px 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 100px;

  ${mediaQuery.tablet`
    margin: 40px 20px;
  `}
`
export const Container = styled.div`
  display: flex;
  justify-content: center;
`

export const Contents = styled.div`
  display: flex;
  justify-content: center;
  gap: 80px;
  max-width: 786px;

  span {
    line-break: anywhere;
  }

  ${mediaQuery.tablet`
    flex-direction: column;
    gap: 40px;
  `}
`

export const ImageWrapper = styled.div`
  position: relative;
  overflow: hidden;
  min-height: 400px;
  flex: 1;

  img {
    object-fit: cover;
  }
`
export const BoardWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const Title = styled.h1`
  margin: 11px 0 20px 0;
  font-size: 32px;
  font-weight: 700;

  color: ${colors.gray700};
`
export const Text = styled.div`
  color: ${colors.gray500};

  span {
    font-weight: 400;
    font-size: 20px;
    line-height: 26px;
  }
`
