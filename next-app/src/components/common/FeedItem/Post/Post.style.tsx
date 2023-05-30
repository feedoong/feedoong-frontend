import styled from 'styled-components'

import { colors } from 'styles/colors'
import { getTypographyStyles, ellipsis } from 'styles/fonts'

export const Container = styled.div`
  width: 100%;
  background-color: var(--color-surface-container-lowest);
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  border-radius: 20px;
  border-bottom-left-radius: 0px;
`

export const Title = styled.h2`
  ${getTypographyStyles('Headline3_B')}
  ${ellipsis(1)}

  color: var(--color-font-primary);
`

export const CardActions = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
`
