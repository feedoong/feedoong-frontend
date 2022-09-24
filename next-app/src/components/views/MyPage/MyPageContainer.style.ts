import styled from 'styled-components'
import { colors } from 'styles/colors'
import { getTypographyStyles } from 'styles/fonts'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${colors.gray900};
`

export const Contents = styled.div`
  width: 626px;
  margin: 0 auto;
  padding-top: 120px;
`

export const PageTitle = styled.p`
  ${getTypographyStyles('Headline2_B')};

  color: ${colors.white};
  margin-bottom: 20px;
`

export const BorderLine = styled.div`
  border: 1px solid ${colors.gray800};
  margin-bottom: 40px;
`

export const InfoTitle = styled.span`
  font-size: 20px;
  font-weight: 500;
  color: ${colors.gray600};
`

export const ButtonWrap = styled.div`
  gap: 10px;
  display: flex;
  justify-content: center;
`

export const Button = styled.button`
  ${getTypographyStyles('Headline4_M')}

  color: ${colors.white};
  background: ${colors.gray800};
  padding: 14px 40px;
  border-radius: 30px;
  border: 0;
  cursor: pointer;
`
