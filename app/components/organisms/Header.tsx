import { useState } from 'react'

import { BarIcon, DotIcon } from '../atoms'
import Portal from './Portal'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="z-10 sticky top-0 inset-x-0 bg-dark w-full h-16 py-6 px-9 flex items-center justify-between">
      <div className="space-x-18">
        <DotIcon />
        <DotIcon />
      </div>

      {!isOpen ? 
        <button
          className="flex flex-col items-center space-y-2"
          onClick={() => setIsOpen(true)}
        >
          <BarIcon />
          <BarIcon />
        </button>
      : null}

      <Portal isOpen={isOpen} onCloseModal={() => setIsOpen(false)} />
    </header>
  )
}

export default Header
