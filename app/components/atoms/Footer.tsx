import { type ReactNode, useMemo } from "react"

import { getValidChildren } from "@/utils/children"
import { cx } from "@/utils/classNames"

const Footer = ({ children }: { children: ReactNode }) => {
  const childrensCount = getValidChildren(children).length

  const renderChildrensConditionally = useMemo(() => {
    if (childrensCount <= 2) return children

    throw new Error('You cannot exceed 2 child nodes')
  }, [children, childrensCount])

  return (
    <footer className={cx("flex items-center px-9 pb-9", childrensCount === 1 ? 'justify-end' : 'justify-between')}>
      {renderChildrensConditionally} 
    </footer>
  )
}

export default Footer
