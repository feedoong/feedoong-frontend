import CardType from './CardType'
import GridType from './GridType'

interface Props {
  type?: 'card' | 'grid'
}

const Card = ({ type = 'card' }: Props) => {
  return type === 'card' ? <CardType /> : <GridType />
}

export default Card
