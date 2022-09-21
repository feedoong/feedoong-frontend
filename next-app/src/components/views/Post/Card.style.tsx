import Image from 'next/image'
import styled from 'styled-components'
import { colors } from 'styles/colors'

export const Container = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-radius: 20px;
  background-color: ${colors.gray100};
`

export const OptionButton = styled(Image)`
  cursor: pointer;
`

export const Body = styled.div`
  display: flex;
  justify-content: space-between;
`

export const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const ImageContainer = styled.div`
  min-width: 80px;
  height: 80px;
  background-color: ${colors.gray300};
  border-radius: 10px;
`

export const LeftContainer = styled.div`
  display: flex;
  gap: 10px;
`
