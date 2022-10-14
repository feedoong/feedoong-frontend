import React from 'react'
import Page from './Page'
import Flex from '../Flex'
import Icons from 'assets/icons'
import usePageInfo from './hooks/usePageInfo'
import * as S from './Paging.style'


interface Props {
  totalPage: number
  currentPage: number
  movePage: () => void
  displayedPageRange?: number
}

const Paging = ({ totalPage, currentPage, movePage, displayedPageRange = 9 }: Props) => {
  const {
    total_page, 
    current_page, 
    has_previous_page, 
    previous_page, 
    has_next_page, 
    next_page, 
    first_page, 
    last_page
  } = usePageInfo({ totalPage, currentPage, displayedPageRange, })

  const isPrevPageVisible = (has_previous_page: boolean) => {
    if (!has_previous_page) return false;
    return true;
  }

  const isNextPageVisible = (has_next_page: boolean) => {
    if (!has_next_page) return false;
    return true;
  }

  const buildPages = () => {
    const pages = [];
    // const { currentPage, movePage } = this.props;
    // const pageInfo = this.makePageInfo();
    for (let i = first_page; i <= last_page; i++) {
      pages.push(
        <Page
          key={i} 
          isActive={i === currentPage} 
          pageNumber={i} 
          pageText={i + ''} 
          onClick={movePage} 
        />
      );
    }

    isPrevPageVisible(has_previous_page) &&
      pages.unshift(
        <Page
          key={'prev' + previous_page}
          pageNumber={previous_page}
          onClick={movePage}
          image={Icons.LeftArrow}
          disabled={!has_previous_page}
        />
      );

    isNextPageVisible(has_next_page) &&
      pages.push(
        <Page
          key={'next' + next_page}
          pageNumber={next_page}
          onClick={movePage}
          image={Icons.RightArrow}
          disabled={!has_next_page}
        />
      );

    return pages;
  }

  const pages = buildPages();
  return (
    <Flex align='center' gap={8}>
      {pages}
    </Flex>  
  )
}

export default Paging
