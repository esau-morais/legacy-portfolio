import type { ReactNode } from "react"

import { useLocation } from "@remix-run/react"

import { cx } from "@/utils/classNames"

import Header from "../organisms/Header"

type TLayoutProps = {
  children: ReactNode
}

const Layout = ({ children }: TLayoutProps) => {
  const { pathname } = useLocation()

  const isHome = pathname === '/'

  return (
    <div className="w-full min-h-screen">
      <Header />

      <main className={cx('mt-16 px-8', !isHome ? "md:px-300" : "md:px-150")}>{children}</main>
    </div>
  )
}

export default Layout
