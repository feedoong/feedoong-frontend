import Flex from 'components/common/Flex'
import IntroduceFeature1 from './IntroduceFeature1'
import IntroduceFeature2 from './IntroduceFeature2'
import IntroduceFeature3 from './IntroduceFeature3'
import IntroduceHeaderBanner from './IntroduceHeaderBanner'
import IntroduceHeaderTitle from './IntroduceHeaderTitle'
import StartFeedoongWithGoogle from './StartFeedoongWithGoogle'
import * as S from 'components/views/Introduce/Introduce.style'

const Introduce = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <IntroduceHeaderTitle />
        <Flex direction="column" gap={100}>
          <IntroduceHeaderBanner />
          <IntroduceFeature1 />
          <IntroduceFeature2 />
          <IntroduceFeature3 />
        </Flex>
        <StartFeedoongWithGoogle />
      </S.Container>
    </S.Wrapper>
  )
}

export default Introduce
