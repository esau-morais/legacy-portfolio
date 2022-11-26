import { type RefObject, useEffect } from 'react'

const listenerCallbacks = new WeakMap()

let observer: IntersectionObserver

const handleEntriesIntersections = (entries: IntersectionObserverEntry[]) => {
  entries.forEach((entry) => {
    if (listenerCallbacks.has(entry.target)) {
      const getEntryElement = listenerCallbacks.get(entry.target)

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target)
        listenerCallbacks.delete(entry.target)
        getEntryElement()
      }
    }
  })
}

const getIntersectionObserver = () => {
  if (observer === undefined) {
    observer = new IntersectionObserver(handleEntriesIntersections, {
      rootMargin: '100px',
      threshold: 0.15,
    })
  }
  return observer
}

const useIntersection = (
  element: RefObject<HTMLElement>,
  callback: () => void
) => {
  useEffect(() => {
    const target = element.current!
    const observer = getIntersectionObserver()
    listenerCallbacks.set(target, callback)
    observer.observe(target)

    return () => {
      listenerCallbacks.delete(target)
      observer.unobserve(target)
    }
  }, [callback, element])
}

export { useIntersection }
