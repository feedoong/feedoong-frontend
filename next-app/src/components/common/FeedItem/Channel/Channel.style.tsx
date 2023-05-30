import styled from 'styled-components'

import { getTypographyStyles, ellipsis } from 'styles/fonts'
import { colors } from 'styles/colors'
import Button from '../../Button'

export const Container = styled.div`
  background-color: var(--color-surface-container-lowest);
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 3px;
  border-radius: 20px;
  border-bottom-left-radius: 0px;
  width: 100%;
`

export const Title = styled.h2`
  ${getTypographyStyles('Headline3_B')}
  ${ellipsis(1)}

  max-width: 526px;
  color: var(--color-font-primary);
`

export const Url = styled.span`
  ${getTypographyStyles('Body2_M')}
  ${ellipsis(1)}
  color: var(--color-font-secondary);
  word-break: break-all;
`

export const AddButton = styled(Button)`
  all: unset;
  cursor: pointer;
`
