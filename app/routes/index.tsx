import LazyImage from '@/components/atoms/LazyImage'

const Index = () => {
  return (
    <section className="flex flex-col md:flex-row items-center md:items-end justify-center">
      <div className="md:mr-8 w-[290px] h-[426px]">
        <LazyImage
          className="grayscale"
          src="/images/myself.jpg"
          alt="Myself"
        />
      </div>
      <div className="relative flex flex-col items-center md:items-start leading-tight">
        <span className="z-0 absolute -left-6 top-1/2 w-16 h-16 rounded-full blur-sm bg-gradient-to-r from-dark-blue via-blue to-light-blue scale-50 md:scale-100" />
        <h2 className="text-3xl-mb md:text-3xl font-normal tracking-wide-mb md:tracking-wide">
          Passionate
        </h2>
        <h1 className="z-10 text-4xl-mb md:text-4xl font-extrabold">Developer</h1>
      </div>
    </section>
  )
}

export default Index
