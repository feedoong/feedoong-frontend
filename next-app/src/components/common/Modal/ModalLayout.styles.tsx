import styled from 'styled-components'

import Flex from 'components/common/Flex'
import { getTypographyStyles } from 'styles/fonts'
import { mediaQuery } from 'styles/mediaQuery'

export const Container = styled.div<{
  size?: 'small' | 'medium' | 'large'
}>`
  ${({ size = 'large' }) => {
    // TODO: 임시로 사이즈 나눠둠. 추후에 디자인 시스템에 맞게 수정 필요
    switch (size) {
      case 'small':
        return `
          width: 250px;
        `
      case 'medium':
        return `
          width: 400px;
        `
      case 'large':
        return `
          width: 600px;
        `
    }
  }}
  background-color: var(--color-surface-container-lowest);
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

  color: var(--color-font-primary);
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
