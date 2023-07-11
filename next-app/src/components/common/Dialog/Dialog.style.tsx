import styled from 'styled-components'

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
  background: rgba(0, 0, 0, 0.5);
`

export const DialogContainer = styled.div<{ width?: string }>`
  width: ${({ width }) => width || '320px'};
  min-height: 190px;
  border-radius: 10px;
  background-color: var(--color-surface-container-lowest);
  padding: 32px 16px 20px;
`

export const Title = styled.p`
  ${getTypographyStyles('Headline2_B')};
  color: var(--color-font-primary);
  margin-bottom: 12px;
`

export const Content = styled.div`
  ${getTypographyStyles('Body1_M')};
  color: var(--color-font-secondary);
`

export const ActionContainer = styled.div`
  display: flex;
  margin-top: 32px;
  gap: 10px;
`
