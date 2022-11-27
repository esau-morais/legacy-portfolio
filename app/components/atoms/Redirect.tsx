import { useMemo } from "react"

import { Link } from "@remix-run/react"
import type { RemixLinkProps } from "@remix-run/react/dist/components"

import { cx } from "@/utils/classNames"

type TRedirectProps = {
  label: string
  direction?: 'west' | 'east' | 'northeast'
} & RemixLinkProps

const Redirect = ({ to, label, direction, ...rest }: TRedirectProps) => {
  const renderArrowIconBasedOnDirection = useMemo(() => { 
    switch(direction) {
      case 'west':
        return '←'
      case 'east':
        return '→'
      case 'northeast':
        return '↗'
      default:
          return null
    }
  }, [direction])

  return (
      <Link
        role="link"
        className={cx("flex text-xl-mb md:text-xl font-extrabold", direction ? direction === 'west' ? 'flex-row-reverse' : 'justify-between'  : null)}
        to={to}
        {...rest}
      >
        <span className="line-clamp-1">
          {label}
        </span>
        {direction ? 
          <span
            data-testid="navigation_arrow"
            aria-label={`navigate to ${to}`}
            className={cx(direction === 'west' ? 'mr-2' : 'ml-2')}
          >
            {renderArrowIconBasedOnDirection}
          </span>
        : null}
      </Link>
  )
}

export default Redirect
