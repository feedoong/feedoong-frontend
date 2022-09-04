import styled from "styled-components"
import { colors } from "styles/colors"

export const InfoRowWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
`
export const InfoTitle = styled.span`
  font-size: 20px;
  font-weight: 500;
  color: ${colors.gray600};
`

export const InfoValue = styled.div`
  width: 320px;
  height: 48px;
  background: ${colors.gray700};
  border-radius: 30px;
  padding: 15px 20px;
`
