import styled from 'styled-components'
import Icons from 'assets/icons'
import * as S from 'components/common/Card/Card.style'
import { getTypographyStyles } from 'styles/fonts'

const Grid = () => {
  return (
    <Container>
      <ImageContainer />
      <Contents>
        <ContentTop>
          <div className="left">
            https://medium.com/myrealtrip-product/asdfasdfdsfgads
          </div>
          <div className="right">
            <S.OptionButton
              alt="옵션 버튼"
              src={Icons.DotsVertical}
              width={16}
              height={16}
            />
          </div>
        </ContentTop>
        <ContentBody>
          제주 온 태국인 관광객 60% ‘입국 불허’…이탈자도 늘어
        </ContentBody>
      </Contents>
    </Container>
  )
}

export default Grid

const Container = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 20px;
  background-color: #f5f5f5;
`

const ImageContainer = styled.div`
  width: 100%;
  height: 160px;
  border-radius: 20px 20px 0 0;
  background-color: #e0e0e0;
`

const Contents = styled.div`
  height: calc(310px - 100px);
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 25px;
`

const ContentTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .left {
    width: 230px;
    font-size: 12px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;

    color: #8c8c8c;
  }

  .left .date {
    ${getTypographyStyles('Body2_B')}
  }

  .left .date {
    ${getTypographyStyles('Body2_M')}
  }
`

const ContentBody = styled.div`
  font-size: 16px;
`

const ContentFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
