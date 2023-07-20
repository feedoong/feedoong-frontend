import styled from 'styled-components'

import { getTypographyStyles } from 'styles/fonts'

interface Props {
  content: React.ReactNode
}

const EmptyContents = ({ content }: Props) => {
  return (
    <Container>
      <span>🐽</span> <div>{content}</div>
    </Container>
  )
}

export default EmptyContents

const Container = styled.div`
  ${getTypographyStyles('Headline3_M')}

  width: 100%;
  height: 100%;
  margin: 60px 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;

  color: var(--color-gray-900);
`
