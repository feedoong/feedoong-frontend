import styled, { css } from 'styled-components'

import { colors } from 'styles/colors'
import { getTypographyStyles, ellipsis } from 'styles/fonts'

export const Container = styled.div`
  overflow: hidden;
  border-radius: 20px;
  background-color: ${colors.gray100};
  height: 290px;
`

export const GridTypeWrapper = styled.div<{ imageUrl?: string }>`
  ${({ imageUrl }) =>
    !imageUrl &&
    css`
      height: 100%;
    `};

  padding: ${({ imageUrl }) => (imageUrl ? ' 12px 20px 20px 20px' : '20px')};
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 12px;
`

export const Title = styled.h2<{ isImageExist: boolean }>`
  ${getTypographyStyles('Headline3_B')}
  ${({ isImageExist }) => ellipsis(isImageExist ? 2 : 3)}

  color: ${colors.gray800};
  min-height: ${({ isImageExist }) => isImageExist && '52px'};
`

export const Description = styled.div`
  ${getTypographyStyles('Body1_M')}
  ${ellipsis(7)}
  
  color: ${colors.gray600};
  word-break: break-all;
`
