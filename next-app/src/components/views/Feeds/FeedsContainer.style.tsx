import styled from 'styled-components'

import { colors } from 'styles/colors'
import { mediaQuery } from 'styles/mediaQuery'

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: calc(100dvh - 203px);
  background-color: ${colors.mainBG};
`

export const FeedWrapper = styled.div`
  margin: 40px 20px 60px;
  padding: 0 12px;
  max-width: 650px;
  width: 100%;
  border-radius: 4px;

  ${mediaQuery.tablet`
    padding: 0px 20px;
  `}
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  width: 100%;
`

export const TitleWrapper = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
`

export const CardContainer = styled.ul`
  display: flex;
  gap: 20px;
  flex-direction: column;
`
