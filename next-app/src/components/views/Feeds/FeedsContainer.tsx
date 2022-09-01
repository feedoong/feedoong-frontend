import Card from 'components/common/Card'
import * as S from './FeedsContainer.style'

const FeedsContainer = () => {
  return (
    <S.Container>
      <h1>Feeds</h1>
      <ul>
        <Card />
        <Card />
        <Card />
      </ul>
    </S.Container>
  )
}

export default FeedsContainer
