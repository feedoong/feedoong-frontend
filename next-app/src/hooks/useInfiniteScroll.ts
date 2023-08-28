import useIntersectionObserver from './useIntersectionObserver'

interface Props {
  fetchNextPage: VoidFunction
}

const useInfiniteScroll = ({ fetchNextPage }: Props) => {
  const onIntersect: IntersectionObserverCallback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        fetchNextPage()
        observer.unobserve(entry.target)
      }
    })
  }

  const { setTarget } = useIntersectionObserver({
    onIntersect,
  })

  return { setTarget }
}

export default useInfiniteScroll
