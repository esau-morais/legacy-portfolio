import type { MetaFunction } from '@remix-run/node'

import LazyImage from '@/components/atoms/LazyImage'

const ITEM_SPACE_INTERSECTION = 'pl-4'

export const meta: MetaFunction = () => ({
  title: 'Uses',
  description:
    "Here's what techn I'm currently using for coding, productivity and more",
})

const Uses = () => {
  return (
    <section>
      <div className="flex flex-col items-center">
        <h1 className="text-4xl-mb md:text-4xl font-extrabold">Uses</h1>
          
        <LazyImage
          src="/images/uses.jpg"
          alt="Dark right-sided vision of my setup, including keyboard and mouse with purple LED lights"
          height={56}
        />
      </div>

      <div>
        <h2 className="mt-8 text-3xl-mb md:text-3xl font-extrabold">Hardware</h2>
        <div className="flex flex-col md:flex-row items-start">
          <ul className="ml-4 list-['▲']">
            <li className={ITEM_SPACE_INTERSECTION}>Husky gaming blizzard 60% keyboard</li>
            <li className={ITEM_SPACE_INTERSECTION}>Logitech  G203 Lyghtsync gaming mouse</li>
            <li className={ITEM_SPACE_INTERSECTION}>Acer Aspire A515-54</li>
            <li className={ITEM_SPACE_INTERSECTION}>QCY T13 Wireless Earbuds</li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="mt-8 text-3xl-mb md:text-3xl font-extrabold">Coding</h2>
        <div className="flex flex-col items-start">
          <ul className="ml-4 list-['▲']">
            <li className={ITEM_SPACE_INTERSECTION}>Editor: Neovim</li>
            <li className={ITEM_SPACE_INTERSECTION}>Theme: Dracula</li>
            <li className={ITEM_SPACE_INTERSECTION}>Font: Fira Code</li>
            <li className={ITEM_SPACE_INTERSECTION}>Terminal: WSL Ubuntu/ZSH</li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="mt-8 text-3xl-mb md:text-3xl font-extrabold">Software</h2>
        <div className="flex flex-col md:flex-row items-start">
          <ul className="ml-4 list-['▲']">
            <li className={ITEM_SPACE_INTERSECTION}>Excalidraw</li>
            <li className={ITEM_SPACE_INTERSECTION}>Figma</li>
            <li className={ITEM_SPACE_INTERSECTION}>Notion</li>
            <li className={ITEM_SPACE_INTERSECTION}>Spotify</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Uses
