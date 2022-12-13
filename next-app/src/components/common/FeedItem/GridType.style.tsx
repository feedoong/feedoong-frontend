import styled, { css } from 'styled-components'

import { colors } from 'styles/colors'
import { getTypographyStyles, ellipsis } from 'styles/fonts'

export const Container = styled.div`
  overflow: hidden;
  border-radius: 20px;
  background-color: ${colors.gray100};
  height: 290px;
  cursor: pointer;
  position: relative;
  transition: transform 0.3s ease-in-out;
  will-change: transform;
  
  &::after {
    content: "";
    width: 245px;
    height: 320px;
    border-radius: 15px;
    left: 0;
    top: 0;
    position: absolute;
  } 

  &:hover {
    box-shadow: 0 0 10px rgba(40,40,40,.3);
    transform: translate(0, -5px);

    &::after {
      transform: translate(0, 10px) scale(0.90);
    }
  }
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

export const Title = styled.h2<{ isViewed: boolean; isImageExist: boolean }>`
  ${getTypographyStyles('Headline3_B')}
  ${({ isImageExist }) => ellipsis(isImageExist ? 2 : 3)}

  color: ${colors.gray800};
  min-height: ${({ isImageExist }) => isImageExist && '52px'};
  opacity: ${({ isViewed }) => (isViewed ? 0.5 : 1)};
`

export const Description = styled.div`
  ${getTypographyStyles('Body1_M')}
  ${ellipsis(7)}
  
  color: ${colors.gray600};
  word-break: break-all;
`
