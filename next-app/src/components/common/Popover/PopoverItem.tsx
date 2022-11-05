import styled from 'styled-components'

import { colors } from 'styles/colors'
import { getTypographyStyles } from 'styles/fonts'

interface Props extends React.HTMLAttributes<HTMLLIElement> {
  icon: React.ReactNode
  children: React.ReactNode
  color?: string
}

const PopoverItem = ({ color, icon, children, ...props }: Props) => {
  return (
    <Container {...props}>
      <div>{icon}</div>
      <Text color={color}>{children}</Text>
    </Container>
  )
}

export default PopoverItem

const Container = styled.li`
  padding: 12px 16px;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;

  :hover {
    background: ${colors.gray100};
  }
`

const Text = styled.span<{
  color?: string
}>`
  ${getTypographyStyles('Headline3_M')};
  white-space: nowrap;
  color: ${({ color }) => color ?? colors.gray900};
`
