import styled, { css } from 'styled-components'

import { getTypographyStyles } from 'styles/fonts'

export const Page = styled.div<{ isActive?: boolean; isImage: boolean }>`
  ${getTypographyStyles('Body1_M')}
  width: 28px;
  height: 28px;
  border-radius: 50%;
  color: var(--color-white-fixed);
  background-color: var(--color-gray-500);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  ${({ isActive }) =>
    isActive &&
    css`
      ${getTypographyStyles('Body1_B')}
      color: var(--color-white-fixed);
      background-color: var(--color-primary-500);
    `}

  ${({ isImage }) =>
    isImage &&
    css`
      background: none;
    `}
`
