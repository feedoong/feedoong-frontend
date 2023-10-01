import { useRouter } from 'next/router'

import Button from 'components/common/Button/Button'
import Flex from 'components/common/Flex'
import { ROUTE } from 'constants/route'
import * as S from 'components/views/Introduce/Introduce.style'

const StartFeedoongWithGoogle = () => {
  const router = useRouter()

  return (
    <Flex
      direction="column"
      align="center"
      gap={24}
      style={{ margin: '150px 0 100px' }}
    >
      <S.HeaderTitle>
        무료로 손쉽게 만드는
        <br />
        나만의 인사이트 피드
      </S.HeaderTitle>
      <Button
        style={{ width: '186px' }}
        size="large"
        onClick={() => router.push(ROUTE.SIGN_UP)}
      >
        구글 계정으로 시작하기
      </Button>
      <S.StartFeedoongDescription>
        여기저기 즐겨찾기 해둔 링크들을 피둥에 추가해보세요
      </S.StartFeedoongDescription>
    </Flex>
  )
}

export default StartFeedoongWithGoogle
