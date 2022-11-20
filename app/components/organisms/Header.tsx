import { DotIcon } from "../atoms"

const Header = () => {
  return (
    <header className="fixed top-0 inset-x-0 bg-dark w-full h-16 py-6 px-9 flex space-between">
      <div className="space-x-18">
        <DotIcon />
        <DotIcon />
      </div>
    </header>
  )
}

export default Header
