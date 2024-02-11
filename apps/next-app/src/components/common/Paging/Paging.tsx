import React from 'react'

import Page from './Page'
import Flex from '../Flex'
import usePageInfo from './hooks/usePageInfo'

import Icons from 'assets/icons'

interface Props {
  totalPage: number
  currentPage: number
  movePage: (page: number) => void
  displayedPageRange?: number
}

const Paging = ({
  totalPage,
  currentPage,
  movePage,
  displayedPageRange = 9,
}: Props) => {
  const {
    hasPreviousPage,
    previousPage,
    hasNextPage,
    nextPage,
    firstPage,
    lastPage,
  } = usePageInfo({ totalPage, currentPage, displayedPageRange })

  const buildPages = () => {
    const pages = []
    for (let i = firstPage; i <= lastPage; i++) {
      pages.push(
        <Page
          key={i}
          isActive={i === currentPage}
          pageNumber={i}
          pageText={i + ''}
          onClick={movePage}
        />
      )
    }

    hasPreviousPage &&
      pages.unshift(
        <Page
          key={'prev' + previousPage}
          pageNumber={previousPage}
          onClick={movePage}
          image={Icons.LeftArrow}
          disabled={!hasPreviousPage}
        />
      )

    hasNextPage &&
      pages.push(
        <Page
          key={'next' + nextPage}
          pageNumber={nextPage}
          onClick={movePage}
          image={Icons.RightArrow}
          disabled={!hasNextPage}
        />
      )

    return pages
  }

  const pages = buildPages()
  return (
    <Flex align="center" gap={8}>
      {pages}
    </Flex>
  )
}

export default Paging
