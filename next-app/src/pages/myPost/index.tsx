import type { NextPage } from 'next'
import Post from 'components/views/Post'
import Layout from 'components/common/Layout'

const MyChannel: NextPage = () => {
  return (
    <Layout>
      <Post />
    </Layout>
  )
}

export default MyChannel
