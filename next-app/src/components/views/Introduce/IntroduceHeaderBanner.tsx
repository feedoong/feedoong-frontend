import * as S from 'components/views/Introduce/Introduce.style'

import Images from 'assets/images'

const IntroduceHeaderBanner = () => {
  return (
    <S.ImageWrapper>
      <img
        src={Images.Fly2Sticker.src}
        alt="focus"
        style={{
          right: 0,
          top: '5%',
          width: '25%',
          position: 'absolute',
        }}
      />
      <img
        src={Images.FocusSticker.src}
        alt="focus"
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
