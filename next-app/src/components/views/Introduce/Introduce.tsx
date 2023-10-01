import Image from 'next/image'
import { useRouter } from 'next/router'

import * as S from 'components/views/Introduce/Introduce.style'
import Flex from 'components/common/Flex'
import Button from 'components/common/Button/Button'
import { ROUTE } from 'constants/route'

import Images from 'assets/images'

const Introduce = () => {
  const router = useRouter()

  return (
    <S.Wrapper>
      <S.Container>
        <S.HeaderTitle>
          여기저기 둥둥💭 떠있는 나의 인사이트💡 콘텐츠📚를{' '}
          <S.PinkFeedoong>피둥🐽</S.PinkFeedoong>으로 모아보세요.
        </S.HeaderTitle>
        <Flex direction="column" gap={100}>
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
            <S.IntroduceHeaderImage
              src={Images.IntroduceHeader.src}
              alt="온보딩 1"
            />
          </S.ImageWrapper>
          <S.FeatureCard style={{ position: 'relative' }}>
            <Flex gap={40} direction="column">
              <Flex
                direction="column"
                gap={16}
                style={{ padding: '30px 20px 0' }}
              >
                <S.CardTitle>
                  내가 보고싶은 컨텐츠만 모아두는 나만의 피드
                </S.CardTitle>
                <S.CardSubTitle>
                  RSS로 발행된 컨텐츠라면 어떤 것이든 구독할 수 있습니다.
                </S.CardSubTitle>
                <S.CardDescription>
                  피둥을 크롬 시작 화면으로 설정하면 네이버 블로그, 브런치,
                  티스토리, 유튜브, 벨로그 등 여러분이 구독하고 싶은 다양한
                  채널의 업데이트를 브라우저 첫 페이지에서 한눈에 확인할 수
                  있어요.
                </S.CardDescription>
              </Flex>
              <Image
                src={Images.HeartSticker}
                alt="focus"
                style={{
                  left: '-90px',
                  bottom: '-60px',
                  width: '30%',
                  position: 'absolute',
                }}
              />
              <img src={Images.Introduce1.src} width="100%" alt="온보딩 1" />{' '}
            </Flex>
          </S.FeatureCard>
          <S.FeatureCard style={{ position: 'relative' }}>
            <Flex gap={40} direction="column">
              <Flex
                direction="column"
                gap={16}
                style={{ padding: '30px 20px 0' }}
              >
                <S.CardTitle>구독 중인 블로그를 한눈에!</S.CardTitle>
                <S.CardSubTitle>
                  브라우저 북마크에 정신 없이 늘어놓은 구독 채널들을 한눈에
                  관리하세요.
                </S.CardSubTitle>
                <S.CardDescription>
                  더 이상 어떤 북마크 폴더에 어떤 블로그를 넣어뒀는지 힘들게
                  찾지 않아도 됩니다. 피둥에서는 구독 중인 채널들을 한눈에
                  관리할 수 있어요.
                </S.CardDescription>
              </Flex>
              <Image
                src={Images.MobileSticker}
                alt="focus"
                style={{
                  right: '-15px',
                  top: '-90px',
                  width: '30%',
                  position: 'absolute',
                }}
              />
              <img src={Images.Introduce2.src} width="100%" alt="온보딩 2" />{' '}
            </Flex>
          </S.FeatureCard>
          <S.FeatureCard style={{ position: 'relative' }}>
            <Flex gap={40} direction="column">
              <Flex
                direction="column"
                gap={16}
                style={{ padding: '30px 20px 0' }}
              >
                <S.CardTitle>좋았던 글은 저장해두세요!</S.CardTitle>
                <S.CardSubTitle>
                  우연히 만난 콘텐츠가 마음에 들었다면 그냥 흘려보내지 마세요.
                </S.CardSubTitle>
                <S.CardDescription>
                  구독한 채널의 컨텐츠를 저장해뒀다가 나중에 다시 보거나, 링크를
                  복사해서 쉽게 공유할 수 있어요.
                </S.CardDescription>
              </Flex>
              <Image
                src={Images.SurpriseSticker}
                alt="focus"
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
        </Flex>
        <Flex
          direction="column"
          align="center"
          gap={24}
          style={{ margin: '50px 0 100px' }}
        >
          <S.HeaderTitle>
            무료로 손쉽게 만드는
            <br />
            나만의 인사이트 피드
          </S.HeaderTitle>
          <Button onClick={() => router.push(ROUTE.SIGN_UP)}>
            구글 계정으로 시작하기
          </Button>
          <p>구글 계정으로 간단하게 시작해 보세요.</p>
        </Flex>
      </S.Container>
    </S.Wrapper>
  )
}

export default Introduce
