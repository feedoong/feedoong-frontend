import type { NextPage } from 'next'
import Post from 'components/mypage/post'
import Layout from 'components/common/Layout'

const MyChannel: NextPage = () => {
  return (
    <Layout>
      <Post />
    </Layout>
  )
}

export default MyChannel
