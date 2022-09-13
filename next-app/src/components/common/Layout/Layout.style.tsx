import styled from 'styled-components'
import { colors } from 'styles/colors'
import { getTypographyStyles } from 'styles/fonts'

export const Top = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 60px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  background-color: ${colors.black};
`

export const TopContents = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`

export const Text = styled.span`
  ${getTypographyStyles('Body1_B')}
  color: #fff;
`

export const Body = styled.div`
  width: 100%;
  margin-top: 80px;
  display: flex;
  justify-content: center;
`
