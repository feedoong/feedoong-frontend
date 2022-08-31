import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  /* display: flex;
  justify-content: center; */
  background-color: #212322;
`

export const Contents = styled.div`
  width: 626px;
  margin: 0 auto;
  padding-top: 120px;
  /* border: 1px solid red; */
`

export const PageTitle = styled.p`
  color: white;
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 20px;
`

export const BorderLine = styled.div`
  border: 1px solid #424242;
  margin-bottom: 40px;
`

export const InfoTitle = styled.span`
  font-size: 20px;
  font-weight: 500;
  color: #8c8c8c;
`

export const ButtonWrap = styled.div`
  display: flex;
  justify-content: center;
`

export const Button = styled.button`
  color: white;
  padding: 14px 40px;
  background: #424242;
  border: 1px solid #424242;
  border-radius: 30px;
  font-size: 16px;
  font-weight: 400;
  &:first-child {
    margin-right: 10px;
  }
`
