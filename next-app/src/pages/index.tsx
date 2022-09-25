import type { NextPage } from 'next'
import FeedsContainerView from 'components/views/Feeds/FeedsContainer'
import RssInputView from 'components/views/RssInput'

const Home: NextPage = () => {
  return (
    <div>
      <RssInputView />
      <FeedsContainerView />
    </div>
  )
}

export default Home
