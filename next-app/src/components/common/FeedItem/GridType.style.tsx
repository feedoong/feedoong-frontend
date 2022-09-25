import styled from 'styled-components'
import { colors } from 'styles/colors'

export const Container = styled.div`
  overflow: hidden;
  border-radius: 20px;
  background-color: ${colors.gray100};
`

export const GridTypeWrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`
