import { Fragment, useRef } from "react"

import { Link, useLocation } from "@remix-run/react"

import { cx } from "@/utils/classNames"
import { MENU_ITEMS } from "@/utils/menuItemsList"
import { Dialog, Transition } from "@headlessui/react"

import { BarIcon } from "../atoms"

type TModalProps = {
  isOpen: boolean
  onCloseModal: () => void
}

const Portal = ({ isOpen, onCloseModal }: TModalProps) => {
  const currentActiveMenuItemRef = useRef(null)
  const { pathname } = useLocation()

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        onClose={onCloseModal}
        initialFocus={currentActiveMenuItemRef}
      >
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex items-center justify-center text-center">
            <Dialog.Panel
              className="w-full min-h-screen flex flex-col items-center justify-center transform overflow-hidden bg-dark/50 backdrop-blur shadow-xl transition-all"
            >
              
              <div
                className="absolute top-6 right-9 flex flex-col items-center space-y-2"
                role="button"
                onClick={onCloseModal}
              >
                <BarIcon className="w-8 rotate-45 translate-y-[5px]" />
                <BarIcon className="w-8 -rotate-45 -translate-y-[5px]" />
              </div>

              {MENU_ITEMS.map(item => (
                <Link
                  ref={pathname === item.path ? currentActiveMenuItemRef : null}
                  key={item.id}
                  to={item.path}
                  className={cx("text-4xl-mb md:text-4xl", pathname === item.path ? 'line-through decoration-blue' : '')}
                >
                    {item.label}
                </Link>
                )
              )}
            </Dialog.Panel>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

export default Portal
