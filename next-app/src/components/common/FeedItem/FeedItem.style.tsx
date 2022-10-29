import Image from "next/legacy/image";
import styled from 'styled-components'
import { colors } from 'styles/colors'
import { ellipsis, getTypographyStyles } from 'styles/fonts'

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${colors.gray600};
`

export const PostMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  img {
    border-radius: 50%;
  }
`

export const Author = styled.span<{ isGridType?: boolean }>`
  ${getTypographyStyles('Body2_B')}
  ${(props) =>
    props.isGridType &&
    `
    display: inline-block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 120px;
  `}
`

export const Date = styled.span`
  ${getTypographyStyles('Body2_M')}

  display: inline-block;
  margin-left: 2px;
`

export const CopyLinkButton = styled(Image)`
  cursor: pointer;
`

export const Body = styled.div`
  display: flex;
  gap: 10px;
`

export const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const Contents = styled.p`
  ${getTypographyStyles('Body1_M')}
  ${ellipsis(2)}

  color: ${colors.gray600};
  word-break: break-all;
`

export const ReadStatus = styled.span`
  ${getTypographyStyles('Body2_M')}

  color: ${colors.gray600};
`

export const Bookmark = styled(Image)`
  cursor: pointer;
`

export const PostContainer = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-radius: 20px;
  background-color: ${colors.gray100};
`

export const PostBody = styled.div`
  display: flex;
  justify-content: space-between;
`

export const PostBodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const LeftContainer = styled.div`
  display: flex;
  gap: 10px;
`

export const ImageContainer = styled.div`
  min-width: 80px;
  height: 80px;
  background-color: ${colors.gray300};
  border-radius: 10px;
`

export const ThumbnailEmpty = styled.div`
  min-width: '80px';
  height: 80px;
  background-color: ${colors.gray300};
  border-radius: 10px;
`
