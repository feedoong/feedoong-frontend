import styled from "styled-components"

export const InfoRowWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
  &:nth-child(4) {
    margin-bottom: 60px;
  }
`
export const InfoTitle = styled.span`
  font-size: 20px;
  font-weight: 500;
  color: #8c8c8c;
`

export const InfoValue = styled.div`
  width: 320px;
  height: 48px;
  background: #646464;
  border-radius: 30px;
  padding: 15px 20px;
`
