import styled from 'styled-components'

import { getTypographyStyles } from 'styles/fonts'

export const Container = styled.div`
  width: 100%;
  gap: 8px;
  display: flex;
  flex-direction: column;
`

export const Label = styled.span`
  ${getTypographyStyles('Body1_B')}
  color: var(--color-font-secondary);
`

export const TextButton = styled.button`
  all: unset;
  color: var(--color-primary-500);
  cursor: pointer;
  ${getTypographyStyles('Body2_M')}
`

export const Input = styled.input`
  ${getTypographyStyles('Headline3_M')}
  width: 100%;
  height: 48px;
  border: none;
  border-radius: 100px;
  outline: none;
  padding: 11px 20px;
  color: var(--color-font-tertiary);
  background-color: var(--color-surface-container-lowest);

  &:read-only {
    cursor: default;
    color: var(--color-font-disabled);
    background-color: var(--color-surface-container-highest);
  }
`

export const InputWrapper = styled.div`
  display: flex;
  position: relative;
`

export const ClearButtonWrapper = styled.div`
  position: absolute;
  top: 13px;
  right: 7px;
  cursor: pointer;
`
