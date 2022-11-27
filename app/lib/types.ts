import type { ComponentProps } from 'react'

export type TMenuItem = {
  id: number | string
  icon?: ComponentProps<'svg'>
  label: string
  path: string
}
