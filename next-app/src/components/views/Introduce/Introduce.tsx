import Image from 'next/image'

import * as S from 'components/views/Introduce/Introduce.style'

import Images from 'assets/images'

// TODO: 이미지는 교체하기
const Introduce = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Contents>
          <S.ImageWrapper>
            <Image src={Images.Introduce2} alt="온보딩 1" fill />
          </S.ImageWrapper>
          <S.BoardWrapper>
            <S.Title>첫 페이지로 글이 배달돼요!</S.Title>
            <S.Text>
              <span>
                RSS로 발행된 컨텐츠라면 어떤 것이든 구독할 수 있습니다.
              </span>
              <br />
              <br />
              <span>
                네이버 블로그, 브런치, 티스토리, 유튜브, 팟캐스트 등 여러분이
                구독하고 싶은 다양한 채널의 업데이트를 브라우저 첫 페이지에서
                한눈에 확인하세요.
              </span>
            </S.Text>
          </S.BoardWrapper>
        </S.Contents>
      </S.Container>

      <S.Container>
        <S.Contents>
          {/* TODO: 반응형 지그재그 해결 필요 */}
          <S.ImageWrapper>
            <Image src={Images.Introduce2} alt="온보딩 2" fill />
          </S.ImageWrapper>
          <S.BoardWrapper>
            <S.Title>좋았던 글은 저장해두세요!</S.Title>
            <S.Text>
              <span>
                우연히 만난 콘텐츠가 마음에 들었다면 그냥 흘려보내지 마세요.
              </span>
              <br />
              <br />
              <span>
                구독한 채널의 컨텐츠를 저장해뒀다가 나중에 다시 보거나, 링크를
                복사해서 쉽게 공유할 수 있습니다.
              </span>
            </S.Text>
          </S.BoardWrapper>
        </S.Contents>
      </S.Container>

      <S.Container>
        <S.Contents>
          <S.ImageWrapper>
            <Image src={Images.Introduce2} alt="온보딩 3" fill />
          </S.ImageWrapper>
          <S.BoardWrapper>
            <S.Title>구독 중인 블로그를 한눈에!</S.Title>
            <S.Text>
              <span>
                브라우저 북마크에 정신 없이 늘어놓은 구독 채널들을 한눈에
                관리하세요.
              </span>
              <br />
              <br />
              <span>
                더 이상 어떤 북마크 폴더에 어떤 블로그를 넣어뒀는지 힘들게 찾지
                않아도 됩니다. 피둥피둥에서는 구독 중인 채널들을 한눈에 관리할
                수 있습니다.
              </span>
            </S.Text>
          </S.BoardWrapper>
        </S.Contents>
      </S.Container>
    </S.Wrapper>
  )
}

export default Introduce
