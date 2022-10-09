import Image from 'next/image'

import Icons from 'assets/icons'
import * as S from './FeedItem.style'
import { Container, Title } from './CardType.style'
import Flex from '../Flex'
import { copyToClipboard } from './FeedItem.utils'
import Divider from '../Divider'

const CardType = () => {
  return (
    <Container>
      <S.Body>
        <S.BodyWrapper>
          <Title>제주 온 태국인 관광객 60% ‘입국 불허’…이탈자도 늘어</Title>
          <S.Contents>
            {`오늘(12일) 오전 10시 30분쯤 방콕에서 130여 명의 태국인 관광객을 태운
          전세기가 제주국제공항에 도착했습니다. 태국인 관광객들은 공항 검역소를
          통과하자마자 입국 심사를 받았는데, 그야말로 '현미경 심사'가
          이뤄졌습니다. 지난 6월 무사증 제도가 재개되면서 불법 취업 등 악용하는
          태국인 관광객이 늘어나 입국 심사가 강화됐기 때문입니다.`}
          </S.Contents>
        </S.BodyWrapper>
        <S.ThumbnailEmpty />
      </S.Body>
      <Divider />
      <S.Footer>
        <S.PostMeta>
          <Image
            alt="네이버 로고"
            src={Icons.NaverIcon}
            width={20}
            height={20}
          />
          <S.Author>네이버 뉴스</S.Author>
          <S.Date>2022.08.21</S.Date>
        </S.PostMeta>
        <Flex gap={12}>
          <S.CopyLinkButton
            alt="링크 복사"
            src={Icons.Link}
            width={16}
            height={16}
            onClick={() => copyToClipboard('url')}
          />
          <S.Bookmark
            alt="북마크"
            src={Icons.BookmarkDeactive}
            width={16}
            height={16}
          />
        </Flex>
      </S.Footer>
    </Container>
  )
}

export default CardType
