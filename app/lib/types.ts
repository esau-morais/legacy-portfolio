import type { ComponentProps, ReactNode } from 'react'

export type TMenuItem = {
  id: number | string
  icon?: ComponentProps<'svg'>
  label: string
  path: string
}

export type TListItem ={
  id: number | string
  content: ReactNode
} 
