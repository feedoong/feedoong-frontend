'use client'
import IntroduceHeaderBanner from 'components/views/Introduce/IntroduceHeaderBanner'
import IntroduceHeaderTitle from 'components/views/Introduce/IntroduceHeaderTitle'
import * as S from './Introduce.style'
import IntroduceFeature1 from 'components/views/Introduce/IntroduceFeature1'

const IntroducePage = () => {
  return (
    <>
      <IntroduceHeaderTitle />
      <IntroduceHeaderBanner />
      <S.FeatureWrapper>
        <IntroduceFeature1 />
      </S.FeatureWrapper>
    </>
  )
}

export default IntroducePage
