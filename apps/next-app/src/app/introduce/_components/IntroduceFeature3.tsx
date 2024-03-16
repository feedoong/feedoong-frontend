import Flex from 'components/common/Flex'
import * as S from '../Introduce.style'
import FeedoongSticker from './FeedoongSticker'

import Images from 'assets/images'

const IntroduceFeature3 = () => {
  return (
    <S.FeatureCard style={{ position: 'relative' }}>
      <Flex gap={40} direction="column">
        <Flex direction="column" gap={16} style={{ padding: '30px 20px 0' }}>
          <S.CardTitle>좋았던 글은 저장해두세요!</S.CardTitle>
          <S.CardSubTitle>
            우연히 만난 콘텐츠가 마음에 들었다면 그냥 흘려보내지 마세요.
          </S.CardSubTitle>
          <S.CardDescription>
            구독한 채널의 컨텐츠를 저장해뒀다가 나중에 다시 보거나, 링크를
            복사해서 쉽게 공유할 수 있어요.
          </S.CardDescription>
        </Flex>
        <FeedoongSticker.Surprise
          style={{
            right: '-40px',
            bottom: '-90px',
            width: '30%',
            position: 'absolute',
          }}
        />
        <img src={Images.Introduce3.src} width="100%" alt="온보딩 3" />{' '}
      </Flex>
    </S.FeatureCard>
  )
}

export default IntroduceFeature3
