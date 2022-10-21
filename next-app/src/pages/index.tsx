import type { NextPage } from 'next'
import RssInputView from 'components/views/RssInput'
import FeedsContainerView from 'components/views/Feeds/FeedsContainer'
import Top from 'components/views/Main/Top'
import Main from 'components/views/Main'

const Home: NextPage = () => {
  return (
    <div>
      <Top />
      <RssInputView />
      {/* <FeedsContainerView /> */}
      <Main />
    </div>
  )
}

export default Home
