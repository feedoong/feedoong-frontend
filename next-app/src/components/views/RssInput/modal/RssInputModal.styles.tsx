import styled from 'styled-components'

import Flex from 'components/common/Flex'
import { colors } from 'styles/colors'
import { getTypographyStyles } from 'styles/fonts'

export const Container = styled.div`
  // TODO: 반응형
  width: 600px;
  /* height: 600px; */
  background-color: ${colors.white};
  border-radius: 12px;
`

export const Header = styled(Flex)`
  padding: 16px 20px;
`

export const Title = styled.h2`
  ${getTypographyStyles('Headline2_B')}

  color: ${colors.gray900};
`

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 16px 20px;

  input {
    all: unset;
    box-sizing: border-box;
    padding: 11px 20px;
    width: 100%;
    height: 48px;

    background: ${colors.gray100};
    border-radius: 100px;
  }
`

export const Description = styled.div`
  margin-bottom: 30px;
`

export const Text = styled.span`
  font-size: 16px;
`

export const Cancel = styled(Text)`
  margin-right: 30px;
  cursor: pointer;
`

export const Submit = styled.div`
  text-align: right;
`
