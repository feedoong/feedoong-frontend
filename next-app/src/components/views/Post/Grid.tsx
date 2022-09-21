import Icons from 'assets/icons'
import * as CS from 'components/common/Card/Card.style'
import * as GS from 'components/common/Gird/Grid.style'

const Grid = () => {
  return (
    <GS.Container>
      <GS.ImageContainer />
      <GS.Contents>
        <GS.ContentTop>
          <div className="news">
            https://medium.com/myrealtrip-product/asdfasdfdsfgads
          </div>
          <div className="right">
            <CS.OptionButton
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
      </GS.Contents>
    </GS.Container>
  )
}

export default Grid
