import Image from "next/legacy/image";
import Icons from 'assets/icons'

import * as S from 'components/common/FeedItem/FeedItem.style'
import * as GS from 'components/common/Grid/Grid.style'

const Grid = () => {
  return (
    <GS.Container>
      <GS.ImageContainer />
      <GS.Contents>
        <GS.ContentTop>
          <div className="left">
            <Image
              alt="네이버 로고"
              src={Icons.NaverIcon}
              width={20}
              height={20}
            />
            <span className="news">네이버 뉴스</span>
            <span className="date">2022.08.22</span>
          </div>
          <div className="right">
            <GS.OptionButton
              alt="옵션 버튼"
              src={Icons.DotsVertical}
              width={16}
              height={16}
            />
          </div>
        </GS.ContentTop>
        <GS.ContentBody>
          제주 온 태국인 관광객 60% ‘입국 불허’…이탈자도 늘어
        </GS.ContentBody>
        <GS.ContentFooter>
          <S.ReadStatus>읽음</S.ReadStatus>
          <S.Bookmark
            alt="북마크"
            src={Icons.Bookmark}
            width={16}
            height={16}
          />
        </GS.ContentFooter>
      </GS.Contents>
    </GS.Container>
  )
}

export default Grid
