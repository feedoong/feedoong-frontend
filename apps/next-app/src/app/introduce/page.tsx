'use client'
import IntroduceHeaderBanner from 'components/views/Introduce/IntroduceHeaderBanner'
import IntroduceHeaderTitle from 'components/views/Introduce/IntroduceHeaderTitle'
import IntroduceFeature1 from 'components/views/Introduce/IntroduceFeature1'
import * as S from './Introduce.style'
import IntroduceFeature2 from 'components/views/Introduce/IntroduceFeature2'
import IntroduceFeature3 from 'components/views/Introduce/IntroduceFeature3'

const IntroducePage = () => {
  return (
    <>
      <IntroduceHeaderTitle />
      <IntroduceHeaderBanner />
      <S.FeatureWrapper>
        <IntroduceFeature1 />
        <IntroduceFeature2 />
        <IntroduceFeature3/>
      </S.FeatureWrapper>
    </>
  )
}

export default IntroducePage
