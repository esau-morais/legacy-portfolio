import { type ImgHTMLAttributes, useRef, useState, cloneElement, useMemo } from 'react'

import { useIntersection } from '@/hooks/intersection'
import { cx } from '@/utils/classNames'

const IMAGE_STYLES_INTERSECTION = 'absolute w-full h-full object-cover transition-opacity duration-1000 lazy'

type TLazyImageProps = {
  src: string
  alt: string
} & ImgHTMLAttributes<HTMLImageElement> 

const LazyImage = ({ className, src, alt }: TLazyImageProps) => {
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
      className="relative overflow-hidden w-full min-w-[inherit] h-full min-h-[inherit] max-h-[inherit]"
    >
      {renderBlurredImage}
      {isInView ? (
        <img
          className={cx(
            IMAGE_STYLES_INTERSECTION,
            hasLoaded ? null : 'opacity-0',
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
          draggable={false}
        />
      ) : null}
    </div>
  )
}

export default LazyImage
