import styled from "styled-components";
import { colors } from "styles/colors";
import { getTypographyStyles } from "styles/fonts";

export const DialogWrapper = styled.div`
  border-radius: 10px;
  background-color: ${colors.white};
`

export const Title = styled.p`
  ${getTypographyStyles('Headline2_B')};
  color: ${colors.gray900};
`

export const Content = styled.p`
  
`
