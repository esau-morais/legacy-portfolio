import { Fragment, useRef } from 'react'

import { Link, useLocation } from '@remix-run/react'

import { cx } from '@/utils/classNames'
import { MENU_ITEMS } from '@/utils/menuItemsList'
import { Dialog, Transition } from '@headlessui/react'

import { BarIcon } from '../atoms'

type TModalProps = {
  isOpen: boolean
  onCloseModal: () => void
}

const Portal = ({ isOpen, onCloseModal }: TModalProps) => {
  const currentActiveMenuItemRef = useRef(null)
  const { pathname } = useLocation()

  return (
    <Transition
      show={isOpen}
      as={Fragment}
        enter="transition-opacity duration-150"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
    >
      <Dialog
        as="div"
        className="relative z-10"
        onClose={onCloseModal}
        initialFocus={currentActiveMenuItemRef}
      >
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex items-center justify-center text-center">
            <Dialog.Panel
              className="w-full min-h-screen flex flex-col items-center justify-center transform overflow-hidden bg-dark/90 backdrop-blur shadow-xl transition-all"
            >
              
              <button
                className="absolute top-6 right-9 flex flex-col items-center space-y-2"
                onClick={onCloseModal}
              >
                <BarIcon className="w-8 rotate-45 translate-y-[5px]" />
                <BarIcon className="w-8 -rotate-45 -translate-y-[5px]" />
              </button>

              <ul>
                {MENU_ITEMS.map(item => (
                  <li key={item.id}>
                    <Link
                      ref={pathname === item.path ? currentActiveMenuItemRef : null}
                      to={item.path}
                      className={cx('text-4xl-mb md:text-4xl rotate-x-30 translate-z-[300px]', pathname === item.path ? 'line-through decoration-blue' : '')}
                      onClick={onCloseModal} 
                    >
                        {item.label}
                    </Link>
                  </li>
                  )
                )}
              </ul>
            </Dialog.Panel>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

export default Portal
