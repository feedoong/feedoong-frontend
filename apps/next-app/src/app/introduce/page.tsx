'use client'
import IntroduceHeaderBanner from 'app/introduce/_components/IntroduceHeaderBanner'
import IntroduceHeaderTitle from 'app/introduce/_components/IntroduceHeaderTitle'
import IntroduceFeature1 from 'app/introduce/_components/IntroduceFeature1'
import IntroduceFeature2 from 'app/introduce/_components/IntroduceFeature2'
import IntroduceFeature3 from 'app/introduce/_components/IntroduceFeature3'
import StartFeedoongWithGoogle from 'app/introduce/_components/StartFeedoongWithGoogle'
import * as S from './Introduce.style'

const IntroducePage = () => {
  return (
    <>
      <IntroduceHeaderTitle />
      <IntroduceHeaderBanner />
      <S.FeatureWrapper>
        <IntroduceFeature1 />
        <IntroduceFeature2 />
        <IntroduceFeature3 />
      </S.FeatureWrapper>
      <StartFeedoongWithGoogle />
    </>
  )
}

export default IntroducePage
