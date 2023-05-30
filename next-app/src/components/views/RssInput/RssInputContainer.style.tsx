import styled, { css } from 'styled-components'

import { colors } from 'styles/colors'
import { getTypographyStyles } from 'styles/fonts'
import { mediaQuery } from 'styles/mediaQuery'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 40px 0;
  background-color: var(--color-surface);
`

export const Form = styled.form`
  padding: 0 12px;
  max-width: 548px;
  width: 100%;

  ${mediaQuery.tablet`
    padding: 0px 20px;
  `}
`

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const InputWrapper = styled.div<{
  isError?: boolean
  inputStyle?: React.CSSProperties
}>`
  display: flex;
  justify-content: space-between;
  flex: auto;
  height: 48px;

  padding: 13px 20px;
  border: ${({ isError }) =>
    isError ? `1px solid ${colors.error}` : `1px solid var(--color-divider)`};
  border-radius: 100px;
  background-color: var(--color-surface-container-lowest);
  color: var(--color-font-primary);

  /* &:focus-within {
    border: 1px solid
      ${({ isError }) => (isError ? colors.error : colors.black)};
  } */

  ${({ inputStyle }) => {
    return css`
      background-color: ${inputStyle?.backgroundColor};
      width: ${inputStyle?.width};
    `
  }}
`

export const Input = styled.input`
  all: unset;
  width: 100%;

  ::placeholder {
    ${getTypographyStyles('Headline3_M')};
    color: ${colors.gray500};
  }
`

export const AddButton = styled.button<{ isValid?: boolean }>`
  all: unset;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ isValid, disabled }) =>
    isValid === true && !disabled
      ? 'var(--color-primary-500)'
      : colors.gray500};
  cursor: pointer;
`

export const Error = styled.div`
  ${getTypographyStyles('Body2_M')};

  position: absolute;
  top: calc(48px + 4px);
  left: 20px;
  padding-right: 48px;
  color: ${colors.error};
`

export const UnderLine = styled.span`
  cursor: pointer;
  text-decoration: underline;
`
