import React from 'react'
import Image from 'next/legacy/image'

import * as S from './Paging.style'

interface Props {
  image?: string
  isActive?: boolean
  disabled?: boolean
  pageText?: string
  pageNumber: number
  onClick: (pageNumber: number) => void
}
const Page = ({ isActive, pageNumber, pageText, onClick, image }: Props) => {
  const renderTextOrImage = () => {
    if (image) {
      return <Image src={image} alt="arrow" />
    } else {
      return pageText
    }
  }

  return (
    <S.Page
      isImage={!!image}
      isActive={isActive}
      onClick={() => onClick(pageNumber)}
    >
      {renderTextOrImage()}
    </S.Page>
  )
}

export default Page
