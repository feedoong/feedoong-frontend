import CardType from './CardType'
import GridType from './GridType'
import SimpleType from './SimpleType'

export type FeedType = 'card' | 'grid' | 'simple'

interface Props {
  type?: FeedType
}

const FeedItem = ({ type = 'card' }: Props) => {
  if (type === 'card') {
    return <CardType />
  }
  if (type === 'grid') {
    return <GridType />
  }
  if (type === 'simple') {
    return <SimpleType />
  }
  return null
}

export default FeedItem
