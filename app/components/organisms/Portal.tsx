import { Fragment, useRef } from 'react'

import { Link, useLocation } from '@remix-run/react'

import { cx } from '@/utils/classNames'
import { MENU_ITEMS } from '@/utils/lists'
import { Dialog, Transition } from '@headlessui/react'
import { motion } from 'framer-motion'

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
          <motion.div initial={false} animate={isOpen ? 'open' : 'closed'} className="flex items-center justify-center text-center">
            <Dialog.Panel
              className="w-full min-h-screen flex flex-col items-center justify-center transform overflow-hidden bg-dark/90 backdrop-blur shadow-xl transition-all"
            >
              
              <button
                aria-label="close full-screen navigation"
                className="aspect-square absolute top-6 right-9 flex flex-col justify-center items-center space-y-2"
                onClick={onCloseModal}
              >
                <BarIcon className="w-8 rotate-45 translate-y-[5px]" />
                <BarIcon className="w-8 -rotate-45 -translate-y-[5px]" />
              </button>

              <motion.ul>
                {MENU_ITEMS.map(item => (
                  <motion.li
                    key={item.id}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -10, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link
                      ref={pathname === item.path ? currentActiveMenuItemRef : null}
                      to={item.path}
                      className={cx(
                        'text-4xl-mb md:text-4xl rotate-x-30 translate-z-[300px]',
                        pathname === item.path ? 'line-through decoration-blue' : ''
                      )}
                      onClick={onCloseModal} 
                    >
                        {item.label}
                    </Link>
                  </motion.li>
                  )
                )}
              </motion.ul>
            </Dialog.Panel>
          </motion.div>
        </div>
      </Dialog>
    </Transition>
  )
}

export default Portal
