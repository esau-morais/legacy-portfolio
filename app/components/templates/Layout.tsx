import type { ReactNode } from "react"

import { cx } from "@/utils/classNames"

import Header from "../organisms/Header"

type TLayoutProps = {
  children: ReactNode
  isHome?: boolean
}

const Layout = ({ children, isHome }: TLayoutProps) => {
  return (
    <div className="max-w-sm md:max-w-3xl lg:max-w-5xl md:px-300 my-5 mx-auto">
      <Header />

      <main className={cx(!isHome ? "mt-150" : "mt-300")}>{children}</main>
    </div>
  )
}

export default Layout
