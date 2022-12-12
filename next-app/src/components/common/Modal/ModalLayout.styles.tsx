import styled from 'styled-components'

import Flex from 'components/common/Flex'
import { colors } from 'styles/colors'
import { getTypographyStyles } from 'styles/fonts'
import { mediaQuery } from 'styles/mediaQuery'

export const Container = styled.div`
  width: 600px;
  background-color: ${colors.white};
  border-radius: 12px;

  ${mediaQuery.mobileL`
    width: 350px;
  `}
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
