import type { ReactNode } from "react"

import { cx } from "@/utils/classNames"

import Header from "../organisms/Header"

type TLayoutProps = {
  children: ReactNode
  isHome?: boolean
}

const Layout = ({ children, isHome = true }: TLayoutProps) => {
  return (
    <div className="w-full min-h-screen">
      <Header />

      <main className={cx('mt-16 px-16', !isHome ? "md:px-300" : "md:px-150")}>{children}</main>
    </div>
  )
}

export default Layout
