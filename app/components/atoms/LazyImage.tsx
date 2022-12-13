import { type ImgHTMLAttributes, useRef, useState, cloneElement, useMemo } from 'react'

import { cx } from '@/utils/classNames'
import { useInView } from 'framer-motion'

const IMAGE_STYLES_INTERSECTION = 'absolute w-full h-full object-cover transition-opacity duration-1000 lazy'

type TLazyImageProps = {
  src: string
  alt: string
} & ImgHTMLAttributes<HTMLImageElement> 

const LazyImage = ({ className, src, alt }: TLazyImageProps) => {
  const [hasLoaded, setHasLoaded] = useState(false)
  const imageReference = useRef(null)
  const isInView = useInView(imageReference)

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
            e.currentTarget.setAttribute('style', 'background: black; opacity: 1;')
            e.currentTarget.title = 'Could not load image'
            e.currentTarget.alt = 'Could not load image'
          }}
          loading="lazy"
          draggable={false}
        />
      ) : null}
    </div>
  )
}

export default LazyImage
