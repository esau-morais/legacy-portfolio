const IMAGE_STYLE_INTERSECTION = 'w-full md:w-2/3 mix-blend-exclusion object-cover'
const ITEM_SPACE_INTERSECTION = 'pl-2'

const Uses = () => {
  return (
    <section className="flex flex-col items-center">
      <h1 className="text-4xl-mb md:text-4xl font-extrabold">Uses</h1>

      <h2 className="text-3xl-mb md:text-3xl font-extrabold">Hardware</h2>
      <div className="flex flex-col md:flex-row items-start">
        <img
          className={IMAGE_STYLE_INTERSECTION}
          src="/images/uses_1.jpg"
          alt="Dark right-sided vision of my setup, including keyboard and mouse with purple LED lights"
          loading="lazy"
        />
        <ul className="list-['▲']">
          <li className={ITEM_SPACE_INTERSECTION}>Husky gaming blizzard 60% keyboard</li>
          <li className={ITEM_SPACE_INTERSECTION}>Logitech  G203 Lyghtsync gaming mouse</li>
          <li className={ITEM_SPACE_INTERSECTION}>Acer Aspire A515-54</li>
          <li className={ITEM_SPACE_INTERSECTION}>QCY T13 Wireless Earbuds</li>
        </ul>
      </div>

      <h2 className="mt-4 text-3xl-mb md:text-3xl font-extrabold">Coding</h2>
      <div className="flex flex-col md:flex-row-reverse items-start">
        <img
          className={IMAGE_STYLE_INTERSECTION}
          src="/images/uses_2.jpg"
          alt="Dark front-side of my setup, including keyboard and laptop turned on"
          loading="lazy"
        />
        <ul className="list-['▲']">
          <li className={ITEM_SPACE_INTERSECTION}>Editor: Neovim</li>
          <li className={ITEM_SPACE_INTERSECTION}>Theme: Dracula</li>
          <li className={ITEM_SPACE_INTERSECTION}>Terminal: WSL Ubuntu/ZSH</li>
        </ul>
      </div>
    </section>
  )
}

export default Uses
