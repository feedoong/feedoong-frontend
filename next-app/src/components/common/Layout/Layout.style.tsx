import styled from 'styled-components'

export const Container = styled.div<{ isSignUpPage: boolean }>`
  ${({ isSignUpPage }) => !isSignUpPage && 'padding-top: 60px'}
`
