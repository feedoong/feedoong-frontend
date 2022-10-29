import styled from 'styled-components'
import { colors } from 'styles/colors'
import { getTypographyStyles } from 'styles/fonts'

export const Wrapper = styled.div`
  width: 100vw;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${colors.gray900};
`
export const Title = styled.h1`
  margin-bottom: 11px;
  font-size: 40px;
  font-weight: 700;
  line-height: 48px;
  color: ${colors.white};
  text-align: center;
`

export const Subtitle = styled.h2`
  color: ${colors.gray400};
  text-align: center;
  ${getTypographyStyles('Headline3_M')}
`

export const GoogleLoginButton = styled.button`
  all: unset;

  margin: 40px 0;
  padding: 14px 50px;
  border-radius: 30px;
  background: ${colors.white};
  cursor: pointer;

  ${getTypographyStyles('Headline3_B')}
`
