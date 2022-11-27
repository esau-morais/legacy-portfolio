import { useEffect } from 'react'

import { cx } from '@/utils/classNames'
import { animate } from 'motion'

const BAR_STYLES_INTERSECTION = 'w-9 bg-light'

const AnimatedBars = () => {
  useEffect(() => {
    animate(
      '#firstBar',
      {
        transform: [
          'scaleY(1.0) translateY(0rem)',
          'scaleY(1.6) translateY(-0.098rem)',
          'scaleY(1.0) translateY(0rem)',
        ],
      },
      {
        duration: 1.6,
        repeat: Infinity,
        easing: ['ease-in-out'],
      }
    )
    animate(
      '#secondBar',
      {
        transform: [
          'scaleY(1.0) translateY(0rem)',
          'scaleY(2.6) translateY(-0.098rem)',
          'scaleY(1.0) translateY(0rem)',
        ],
      },
      {
        delay: -1.8,
        duration: 2.2,
        repeat: Infinity,
        easing: ['ease-in-out'],
      }
    )
    animate(
      '#thirdBar',
      {
        transform: [
          'scaleY(1.0)  translateY(0rem)',
          'scaleY(0.8) translateY(0.88rem)',
          'scaleY(1.0)  translateY(0rem)',
        ],
      },
      {
        delay: -3.8,
        duration: 2.2,
        repeat: Infinity,
        easing: ['ease-in-out'],
      }
    )
  }, [])

  return (
    <div className="absolute z-10 left-1/4 -top-1/4 flex items-end w-300 h-300 overflow-hidden">
      <span
        id="firstBar"
        className={cx(BAR_STYLES_INTERSECTION, 'h-20')}
      />
      <span
        id="secondBar"
        className={cx(BAR_STYLES_INTERSECTION, 'mx-6 h-24')}
      />
      <span 
        id="thirdBar"
        className={cx(BAR_STYLES_INTERSECTION, 'h-28')}
      />
    </div>
  )
}

export default AnimatedBars
