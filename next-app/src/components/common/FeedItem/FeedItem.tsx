import CardTypeDefault from './CardType'
import GridTypeDefault from './GridType'

export type FeedType = 'card' | 'grid'

interface Props {
  type?: FeedType
  CardTypeItem?: () => JSX.Element
  GridTypeItem?: () => JSX.Element
}

const FeedItem = ({ type = 'card', CardTypeItem, GridTypeItem }: Props) => {
  const CardType = CardTypeItem ?? CardTypeDefault
  const GridType = GridTypeItem ?? GridTypeDefault

  return type === 'card' ? <CardType /> : <GridType />
}

export default FeedItem
