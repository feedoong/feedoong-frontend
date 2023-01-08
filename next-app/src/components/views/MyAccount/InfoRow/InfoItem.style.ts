import styled from 'styled-components'

import { colors } from 'styles/colors'
import { getTypographyStyles } from 'styles/fonts'

export const InfoItemContainer = styled.div`
  width: 315px;
`

export const SubLabel = styled.span`
  ${getTypographyStyles('Body1_B')}
  color: ${colors.gray600};
`

export const CopyButton = styled.button`
  all: unset;
  color: ${colors.blue};
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

  &:read-only {
    cursor: default;
    color: ${colors.gray600};
    background-color: ${colors.gray400};
  }
`
