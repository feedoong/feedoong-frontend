// IntersectionObserver hook

import { useEffect, useState } from 'react'

interface useIntersectionObserverProps {
  root?: null
  rootMargin?: string
  threshold?: number

  onIntersect: IntersectionObserverCallback
}

const useIntersectionObserver = ({
  root,
  rootMargin = '0px',
  threshold = 0.01,
  onIntersect,
}: useIntersectionObserverProps) => {
  const [target, setTarget] = useState<HTMLElement | null | undefined>(null)

  useEffect(() => {
    if (!target) return

    const observer: IntersectionObserver = new IntersectionObserver(
      onIntersect,
      { root, rootMargin, threshold }
    )
    observer.observe(target)

    return () => observer.unobserve(target)
  }, [onIntersect, root, rootMargin, target, threshold])

  return { setTarget }
}

export default useIntersectionObserver

// 호출하는 컴포넌트

// const onIntersect: IntersectionObserverCallback = (entries, observer) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       // intersecting때 원하는 액션

//       observer.unobserve(entry.target);
//     }
//   });
// };

// observe가 필요한 영역 ref에 setTarget
// const { setTarget } = useIntersectionObserver({
//   onIntersect,
// });
