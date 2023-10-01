import Image from 'next/image'

import Flex from 'components/common/Flex'
import * as S from 'components/views/Introduce/Introduce.style'

import Images from 'assets/images'

const IntroduceFeature1 = () => {
  return (
    <S.FeatureCard style={{ position: 'relative' }}>
      <Flex gap={40} direction="column">
        <Flex direction="column" gap={16} style={{ padding: '30px 20px 0' }}>
          <S.CardTitle>내가 보고싶은 컨텐츠만 모아두는 나만의 피드</S.CardTitle>
          <S.CardSubTitle>
            RSS로 발행된 컨텐츠라면 어떤 것이든 구독할 수 있습니다.
          </S.CardSubTitle>
          <S.CardDescription>
            피둥을 크롬 시작 화면으로 설정하면 네이버 블로그, 브런치, 티스토리,
            유튜브, 벨로그 등 여러분이 구독하고 싶은 다양한 채널의 업데이트를
            브라우저 첫 페이지에서 한눈에 확인할 수 있어요.
          </S.CardDescription>
        </Flex>
        <Image
          src={Images.HeartSticker}
          alt="focus"
          style={{
            left: '-10%',
            bottom: '-5%',
            width: '30%',
            position: 'absolute',
          }}
        />
        <img src={Images.Introduce1.src} width="100%" alt="온보딩 1" />{' '}
      </Flex>
    </S.FeatureCard>
  )
}

export default IntroduceFeature1
