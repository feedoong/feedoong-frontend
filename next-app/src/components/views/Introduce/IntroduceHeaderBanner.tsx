import * as S from 'components/views/Introduce/Introduce.style'
import FeedoongSticker from './FeedoongSticker'

import Images from 'assets/images'

const IntroduceHeaderBanner = () => {
  return (
    <S.ImageWrapper>
      <FeedoongSticker.Fly
        style={{
          right: 0,
          top: '5%',
          width: '25%',
          position: 'absolute',
        }}
      />
      <FeedoongSticker.Focus
        style={{
          left: '5%',
          bottom: '5%',
          width: '20%',
          position: 'absolute',
        }}
      />
      <S.IntroduceHeaderImage src={Images.IntroduceHeader.src} alt="온보딩 1" />
    </S.ImageWrapper>
  )
}

export default IntroduceHeaderBanner
