import React from "react";

interface Props {
  totalPage: number
  currentPage: number
  displayedPageRange: number
}

const usePageInfo = ({ totalPage, currentPage, displayedPageRange }: Props) => {
  let total_page = totalPage
  let current_page = currentPage
  let has_previous_page = currentPage > 1
  let previous_page = currentPage - 1;
  let has_next_page = totalPage > 0 && currentPage !== totalPage
  let next_page = currentPage + 1
  let first_page = Math.max(1, current_page - Math.floor(displayedPageRange / 2))
  let last_page = Math.min(totalPage, currentPage + Math.floor(displayedPageRange / 2))

  if (last_page - first_page + 1 < displayedPageRange) {
    if (currentPage < total_page / 2) {
      last_page = Math.min(total_page, last_page + (displayedPageRange - (last_page - first_page)))
    } else {
      first_page = Math.max(1, first_page - (displayedPageRange - (last_page - first_page)))
    }
  }

  if (last_page - first_page + 1 > displayedPageRange) {
    if (current_page > total_page / 2) {
      first_page++;
    } else {
      last_page--;
    }
  }

  return {
    total_page: total_page,
    current_page: current_page,
    has_previous_page: has_previous_page,
    previous_page: previous_page,
    has_next_page: has_next_page,
    next_page: next_page,
    first_page: first_page,
    last_page: last_page
  }
}

export default usePageInfo
