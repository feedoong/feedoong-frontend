import CardType from './CardType'
import GridType from './GridType'

export type FeedType = 'card' | 'grid'

interface Props {
  type?: FeedType
}

const FeedItem = ({ type = 'card' }: Props) => {
  return type === 'card' ? <CardType /> : <GridType />
}

export default FeedItem
