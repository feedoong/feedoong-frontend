import Image from 'next/image'

import Icons from 'assets/icons'
import { colors } from 'styles/colors'
import * as S from './FeedItem.style'
import { Container, GridTypeWrapper } from './GridType.style'

const GridType = () => {
  return (
    <Container>
      <div
        style={{
          height: '160px',
          backgroundColor: colors.gray300,
        }}
      />
      <GridTypeWrapper>
        <S.Header>
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
          <S.OptionButton
            alt="옵션 버튼"
            src={Icons.DotsVertical}
            width={16}
            height={16}
          />
        </S.Header>
        <S.Body>
          <S.Title>제주 온 태국인 관광객 60% ‘입국 불허’…이탈자도 늘어</S.Title>
        </S.Body>
        <S.Footer>
          <S.ReadStatus>읽음</S.ReadStatus>
          <S.Bookmark
            alt="북마크"
            src={Icons.Bookmark}
            width={16}
            height={16}
          />
        </S.Footer>
      </GridTypeWrapper>
    </Container>
  )
}

export default GridType
