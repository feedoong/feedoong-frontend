import React from 'react'
import Image from 'next/image'
import * as S from './Paging.style'

interface Props {
  isActive?: boolean
  pageNumber: number
  pageText?: string
  onClick: (pageNumber: number) => void
  disabled?: boolean
  image?: string
}
const Page = ({ isActive, pageNumber, pageText, onClick, disabled, image }: Props) => {
  const renderTextOrImage = () => {
    if (!!image) {
      return <Image style={{ height: 15 }} src={image} alt="arrow" />;
    } else {
      return pageText;
    }
  };


  return ( 
    <S.Page isActive={isActive} onClick={() => onClick(pageNumber)}>
      {renderTextOrImage()}
    </S.Page>
  // <span
  //   // onClick={() => this.props.onClick(this.props.pageNumber)}
  // >
  //   {renderTextOrImage()}
  // </span>
  )
}

export default Page;
