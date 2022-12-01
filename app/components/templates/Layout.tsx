import type { ReactNode } from 'react'

import { useLocation } from '@remix-run/react'

import { cx } from '@/utils/classNames'

import Header from '../organisms/Header'

type TLayoutProps = {
  children: ReactNode
}

const Layout = ({ children }: TLayoutProps) => {
  const { pathname } = useLocation()

  const isHome = pathname === '/'

  return (
    <div className="w-full min-h-screen">
      <Header />

      <main className={cx('mt-16 pb-8 px-8 mx-auto', !isHome ? 'md:max-w-3xl' : 'md:max-w-5xl')}>{children}</main>
    </div>
  )
}

export default Layout
