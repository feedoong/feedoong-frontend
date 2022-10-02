import styled from 'styled-components'
import { colors } from 'styles/colors'
import { getTypographyStyles } from 'styles/fonts'

export const Background = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 0;
  top: 0;
  text-align: center;
  background: rgba(0, 0, 0, 0.5); ;
`

export const DialogContainer = styled.div<{ width?: string }>`
  width: ${({ width }) => width || '320px'};
  min-height: 190px;
  border-radius: 10px;
  background-color: ${colors.white};
  padding: 32px 16px 20px;
`

export const Title = styled.p`
  ${getTypographyStyles('Headline2_B')};
  color: ${colors.gray900};
  margin-bottom: 8px;
`

export const Content = styled.div`
  ${getTypographyStyles('Body1_M')};
  color: ${colors.gray600};
`

export const ActionContainer = styled.div`
  display: flex;
  margin-top: 32px;
  gap: 10px;

  button {
    ${getTypographyStyles('Body1_M')};
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 12px 16px;
    width: 139px;
    height: 48px;
    outline: none;
    border: none;
    border-radius: 30px;
    background-color: ${colors.gray400};
    color: ${colors.gray600};
    cursor: pointer;
  }

  .confirm {
    background-color: ${colors.black};
    color: ${colors.white};
  }

  .nagative {
    background-color: ${colors.error};
    color: ${colors.white};
  }
`
