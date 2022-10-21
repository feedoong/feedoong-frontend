import React from 'react'
import MyPageContainer from 'components/views/MyPage/MyPageContainer'
import { GetServerSidePropsContext } from 'next'

export const getServerSideProps = (ctx: GetServerSidePropsContext) => {
  const { req } = ctx

  /**
   * 저장된 토큰이 없을 시 로그아웃 상태로 간주하고 홈으로 redirect
   */
  if (!req.cookies.token) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  return {
    props: {},
  }
}

const MyPage = () => {
  return <MyPageContainer />
}

export default MyPage
