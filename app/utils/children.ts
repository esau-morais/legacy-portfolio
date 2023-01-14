import { Children, isValidElement, type ReactNode } from 'react'

/**
 * gets only valid children of a component
 * and ignores nullish or falsy.
 *
 * @param {ReactNode} children
 */
export const getValidChildren = (children: ReactNode) =>
  Children.toArray(children).filter((child) =>
    isValidElement(child),
  ) as React.ReactElement[]
