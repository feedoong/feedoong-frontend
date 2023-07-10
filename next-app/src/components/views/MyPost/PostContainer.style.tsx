import styled from 'styled-components'

import { colors } from 'styles/colors'
import { getTypographyStyles } from 'styles/fonts'
import { mediaQuery } from 'styles/mediaQuery'

export const Container = styled.div`
  height: 100%;
  overflow: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${colors.mainBG};
  border: 1px solid red;
`

export const FeedWrapper = styled.div`
  margin: 0 auto;
  padding: 0 12px;
  max-width: 640px;
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
`

export const TitleWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
  justify-content: space-between;
`

export const Title = styled.h1`
  ${getTypographyStyles('Headline2_B')}

  color: ${colors.gray900};
  cursor: pointer;
`

export const CardContainer = styled.ul`
  display: flex;
  gap: 20px;
  flex-direction: column;
`
