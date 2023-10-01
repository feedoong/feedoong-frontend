import Image from 'next/image'

import * as S from 'components/views/Introduce/Introduce.style'

import Images from 'assets/images'

const IntroduceHeaderBanner = () => {
  return (
    <S.ImageWrapper>
      <Image
        src={Images.Fly2Sticker}
        alt="focus"
        style={{
          right: 0,
          top: '-35px',
          width: '25%',
          position: 'absolute',
        }}
      />
      <Image
        src={Images.FocusSticker}
        alt="focus"
        style={{
          left: '30px',
          bottom: '20px',
          width: '20%',
          position: 'absolute',
        }}
      />
      <S.IntroduceHeaderImage src={Images.IntroduceHeader.src} alt="온보딩 1" />
    </S.ImageWrapper>
  )
}

export default IntroduceHeaderBanner
