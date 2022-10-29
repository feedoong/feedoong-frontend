import styled from 'styled-components'
import { colors } from 'styles/colors'

export const Wrapper = styled.div`
  margin: 100px 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 100px;
`
export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

export const Contents = styled.div`
  width: 100%;
  height: 400px;
  margin: 0 180px;
  display: flex;
  justify-content: center;
  gap: 80px;
`

export const ImageWrapper = styled.div`
  width: 550px;
  height: 100%;
  border-radius: 12px;
  background-color: ${colors.gray200};
`
export const BoardWrapper = styled.div`
  width: 550px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const Title = styled.h1`
  margin: 11px 0 20px 0;
  font-size: 32px;
  font-weight: 700;

  color: ${colors.gray700};
`
export const Text = styled.div`
  color: ${colors.gray500};

  span {
    font-weight: 400;
    font-size: 20px;
    line-height: 26px;
  }
`
