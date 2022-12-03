import { type ImgHTMLAttributes, useRef, useState, cloneElement, useMemo } from 'react'

import { useIntersection } from '@/hooks/intersection'
import { cx } from '@/utils/classNames'

const IMAGE_STYLES_INTERSECTION = 'absolute w-full h-full object-cover transition-opacity duration-1000 lazy'

type TLazyImageProps = {
  src: string
  height: number
  alt: string
} & ImgHTMLAttributes<HTMLImageElement> 

const LazyImage = ({ className, src, height, alt }: TLazyImageProps) => {
  const [hasLoaded, setHasLoaded] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const imageReference = useRef(null)
  useIntersection(imageReference, () => setIsInView(true))

  const renderBlurredImage = useMemo(() => cloneElement(<img src={src} alt={alt} />, {
    ref: imageReference,
    className: cx(IMAGE_STYLES_INTERSECTION, 'blur-md', hasLoaded ? 'opacity-0' : 'opacity-100')
  }), [hasLoaded, src, alt])

  return (
    <div
      ref={imageReference}
      className="relative overflow-hidden w-full"
      style={{
        height: `${height}vh`
      }}
    >
      {isInView ? (
        <>
          {renderBlurredImage}
          <img
            className={cx(
              IMAGE_STYLES_INTERSECTION,
              hasLoaded ? 'opacity-100' : 'opacity-0',
              className
            )}
            src={src}
            alt={alt}
            onLoad={() => setHasLoaded(true)}
            onError={(e) => {
              e.currentTarget.onerror = null
              e.currentTarget.title = ''
            }}
            loading="lazy"
          />
        </>
      ) : null}
    </div>
  )
}

export default LazyImage