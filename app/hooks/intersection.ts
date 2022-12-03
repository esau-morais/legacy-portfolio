import { type RefObject, useEffect } from 'react'

const listenerCallbacks = new WeakMap()

let observer: IntersectionObserver

const handleIntersections = (entries: IntersectionObserverEntry[]) => {
  entries.forEach((entry) => {
    if (listenerCallbacks.has(entry.target)) {
      const getTargetedelementent = listenerCallbacks.get(entry.target)

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target)
        listenerCallbacks.delete(entry.target)
        getTargetedelementent()
      }
    }
  })
}

const getIntersectionObserver = () => {
  if (observer === undefined) {
    observer = new IntersectionObserver(handleIntersections, {
      rootMargin: '100px',
      threshold: 0.15,
    })
  }
  return observer
}

const useIntersection = (
  element: RefObject<HTMLElement> & object,
  callback: () => void
) => {
  useEffect(() => {
    const target = element.current
    if (!target) return

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
