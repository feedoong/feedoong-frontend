import * as S from 'components/views/Introduce/Introduce.style'
import IntroduceFeature1 from './IntroduceFeature1'
import IntroduceFeature2 from './IntroduceFeature2'
import IntroduceFeature3 from './IntroduceFeature3'
import IntroduceHeaderBanner from './IntroduceHeaderBanner'
import IntroduceHeaderTitle from './IntroduceHeaderTitle'
import StartFeedoongWithGoogle from './StartFeedoongWithGoogle'

const Introduce = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <IntroduceHeaderTitle />
        <IntroduceHeaderBanner />
        <S.FeatureWrapper>
          <IntroduceFeature1 />
          <IntroduceFeature2 />
          <IntroduceFeature3 />
        </S.FeatureWrapper>
        <StartFeedoongWithGoogle />
      </S.Container>
    </S.Wrapper>
  )
}

export default Introduce
