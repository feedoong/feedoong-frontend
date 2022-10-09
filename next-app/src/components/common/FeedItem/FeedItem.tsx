import type { Item } from 'types/feeds'
import CardType from './CardType'
import GridType from './GridType'
import SimpleType from './SimpleType'

export type FeedType = 'card' | 'grid' | 'simple'

interface Props {
  type?: FeedType
  item: Item
}

const FeedItem = ({ type = 'card', item }: Props) => {
  if (type === 'card') {
    return <CardType item={item} />
  }
  if (type === 'grid') {
    return <GridType item={item} />
  }
  if (type === 'simple') {
    // TODO: 값 채우기
    return <SimpleType />
  }
  return null
}

export default FeedItem
