const Uses = () => {
  return (
    <section className="flex flex-col items-center">
      <h1 className="text-4xl-mb md:text-4xl font-extrabold">Uses</h1>

      <h2 className="text-3xl-mb md:text-3xl font-extrabold">Hardware</h2>
      <div className="flex flex-col md:flex-row items-start">
        <img
          className="w-full md:w-2/3 mix-blend-exclusion object-cover"
          src="/images/uses_1.jpg"
          alt="Dark right-sided vision of my setup, including keyboard and mouse with purple LED lights"
          loading="lazy"
        />
        <ul className="list-['▲']">
          <li className="pl-2">Husky gaming blizzard 60% keyboard</li>
          <li className="pl-2">Logitech  G203 Lyghtsync gaming mouse</li>
          <li className="pl-2">Acer Aspire A515-54</li>
          <li className="pl-2">QCY T13 Wireless Earbuds</li>
        </ul>
      </div>

      <h2 className="mt-4 text-3xl-mb md:text-3xl font-extrabold">Coding</h2>
      <div className="flex flex-col md:flex-row-reverse items-start">
        <img
          className="w-full md:w-2/3 mix-blend-exclusion object-cover"
          src="/images/uses_2.jpg"
          alt="Dark front-side of my setup, including keyboard and laptop turned on"
          loading="lazy"
        />
        <ul className="list-['▲']">
          <li className="pl-2">Editor: Neovim</li>
          <li className="pl-2">Theme: Dracula</li>
          <li className="pl-2">Terminal: WSL Ubuntu/ZSH</li>
        </ul>
      </div>
    </section>
  )
}

export default Uses
