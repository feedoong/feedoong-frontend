interface Props {
  totalPage: number
  currentPage: number
  displayedPageRange: number
}

const usePageInfo = ({ totalPage, currentPage, displayedPageRange }: Props) => {
  let total_page = totalPage
  let current_page = currentPage
  let hasPreviousPage = currentPage > 1
  let previousPage = currentPage - 1;
  let hasNextPage = totalPage > 0 && currentPage !== totalPage
  let nextPage = currentPage + 1
  let firstPage = Math.max(1, current_page - Math.floor(displayedPageRange / 2))
  let lastPage = Math.min(totalPage, currentPage + Math.floor(displayedPageRange / 2))

  if (lastPage - firstPage + 1 < displayedPageRange) {
    if (currentPage < total_page / 2) {
      lastPage = Math.min(total_page, lastPage + (displayedPageRange - (lastPage - firstPage)))
    } else {
      firstPage = Math.max(1, firstPage - (displayedPageRange - (lastPage - firstPage)))
    }
  }

  if (lastPage - firstPage + 1 > displayedPageRange) {
    if (current_page > total_page / 2) {
      firstPage++;
    } else {
      lastPage--;
    }
  }

  return {
    hasPreviousPage: hasPreviousPage,
    previousPage: previousPage,
    hasNextPage: hasNextPage,
    nextPage: nextPage,
    firstPage: firstPage,
    lastPage: lastPage
  }
}

export default usePageInfo
