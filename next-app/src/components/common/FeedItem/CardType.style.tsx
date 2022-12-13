import styled from 'styled-components'

import { colors } from 'styles/colors'
import { getTypographyStyles, ellipsis } from 'styles/fonts'

export const Container = styled.div`
  background-color: ${colors.gray100};
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  border-radius: 20px;
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

export const Title = styled.h2<{ isViewed: boolean }>`
  ${getTypographyStyles('Headline3_B')}
  ${ellipsis(1)}

  color: ${colors.gray800};
  opacity: ${({ isViewed }) => (isViewed ? 0.5 : 1)};
`
