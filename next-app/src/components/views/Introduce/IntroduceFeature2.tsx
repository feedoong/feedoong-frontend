import Flex from 'components/common/Flex'
import * as S from 'components/views/Introduce/Introduce.style'
import FeedoongSticker from './FeedoongSticker'

// import Images from 'assets/images'

const IntroduceFeature2 = () => {
  return (
    <S.FeatureCard style={{ position: 'relative' }}>
      <Flex gap={40} direction="column">
        <Flex direction="column" gap={16} style={{ padding: '30px 20px 0' }}>
          <S.CardTitle>구독 중인 블로그를 한눈에!</S.CardTitle>
          <S.CardSubTitle>
            브라우저 북마크에 정신 없이 늘어놓은 구독 채널들을 한눈에
            관리하세요.
          </S.CardSubTitle>
          <S.CardDescription>
            더 이상 어떤 북마크 폴더에 어떤 블로그를 넣어뒀는지 힘들게 찾지
            않아도 됩니다. 피둥에서는 구독 중인 채널들을 한눈에 관리할 수
            있어요.
          </S.CardDescription>
        </Flex>
        <FeedoongSticker.Mobile
          style={{
            right: '-15px',
            top: '-10%',
            width: '20%',
            position: 'absolute',
          }}
        />
        {/* <img src={Images.Introduce2.src} width="100%" alt="온보딩 2" />{' '} */}
      </Flex>
    </S.FeatureCard>
  )
}

export default IntroduceFeature2
