const Index = () => {
  return (
    <section className="flex flex-col md:flex-row items-center md:items-end justify-center">
      <img className="md:mr-8 w-[290px] h-[426px] object-cover grayscale" src="/images/myself.jpg" alt="Myself" />
      <div className="relative flex flex-col items-center text-4xl font-bold leading-tight scale-50 md:scale-100">
        <span className="z-0 absolute -left-6 top-1/2 w-16 h-16 rounded-full blur-sm bg-gradient-to-r from-dark-blue via-blue to-light-blue" />
        <span className="text-3xl font-normal tracking-wide">
          Passionate
        </span>
        <span className="z-10">
          Developer
        </span>
      </div>
    </section>
  )
}

export default Index
