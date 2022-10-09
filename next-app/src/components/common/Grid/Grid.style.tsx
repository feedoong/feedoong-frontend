import Image from 'next/future/image'
import styled from 'styled-components'

import { getTypographyStyles } from 'styles/fonts'
import { colors } from 'styles/colors'

export const Container = styled.div`
  width: 300px;
  height: 310px;
  border-radius: 20px;
  background-color: #f5f5f5;
`

export const ImageContainer = styled.div`
  width: 100%;
  height: 160px;
  border-radius: 20px 20px 0 0;
  background-color: #e0e0e0;
`

export const Contents = styled.div`
  height: calc(310px - 160px);
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 25px;
`

export const ContentTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .left {
    display: flex;
    align-items: center;
    gap: 5px;
    color: #8c8c8c;
  }

  .left .date {
    ${getTypographyStyles('Body2_B')}
  }

  .left .date {
    ${getTypographyStyles('Body2_M')}
  }

  .news {
    width: 230px;
    font-size: 12px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    color: ${colors.gray600};
  }
`

export const ContentBody = styled.div`
  font-size: 16px;
`

export const ContentFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const OptionButton = styled(Image)`
  cursor: pointer;
`
