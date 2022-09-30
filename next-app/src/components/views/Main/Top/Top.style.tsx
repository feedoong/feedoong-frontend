import styled from 'styled-components'
import { colors } from 'styles/colors'
import { getTypographyStyles } from 'styles/fonts'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 300px;
  background: ${colors.gray900};
`
export const Title = styled.h1`
  font-size: 40px;
  font-weight: 700;
  line-height: 48px;
  color: ${colors.white};
  text-align: center;
  margin-bottom: 11px;
`

export const Subtitle = styled.h2`
  ${getTypographyStyles('Headline4_M')}
  color: ${colors.gray400};
  text-align: center;
`

export const GoogleLoginButton = styled.button`
  margin: 40px 0;
  padding: 14px 50px;
  border-radius: 30px;
  background: ${colors.white};
  cursor: pointer;
`

export const ButtonContentsWrapper = styled.div`
  display: flex;
  gap: 10px;

  p {
    ${getTypographyStyles('Headline4_B')}
  }
`
