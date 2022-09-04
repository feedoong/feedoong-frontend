import CardType from './CardType'
import GridType from './GridType'

export type CardType = 'card' | 'grid'

interface Props {
  type?: CardType
}

const Card = ({ type = 'card' }: Props) => {
  return type === 'card' ? <CardType /> : <GridType />
}

export default Card
