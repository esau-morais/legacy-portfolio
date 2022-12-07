import LazyImage from '@/components/atoms/LazyImage'

const About = () => {
  return (
    <section>
      <h1 className="text-center headingOne">About me</h1>

      <h2 className="headingTwo">Short bio</h2>
      <div className="flex items-baseline flex-wrap">
        <p className="mr-2">
          ▲ Welcome to my world, I’m Esaú [ee-saw]. I am 17 years-old and I currently live at Brazil.
          I've been decrypting and learning more about the web development world since 2020.
        </p>
      </div>

      <h2 className="mt-8 headingTwo">Long bio</h2>
      <div className="flex items-baseline flex-wrap space-y-4">
        <p className="mb-2">
          ▲ Esaú [ee-saw] is 17 years-old, Brazilian and he has been learning more about the web development world since 2020.
          Knowledgeable in User Interface, testing, debugging processes, and server-sided projects construction.
        </p>
        <p>
          🚀 Equipped with a diverse and promising skill-set. Proficient in an assortment of technologies, including:
          <br />
          ▲ JavaScript <br />
          ▲ React.js <br />
          ▲ TypeScript <br />
          ▲ Next.js <br />
          ▲ Node.js <br />
          ▲ + diverse modern tools
        </p>
      </div>

      <h2 className="mt-8 headingTwo">Work Experience</h2>
      <div className="flex flex-col md:flex-row items-start md:items-center">
        <div className="w-16 h-16 mb-2 md:mr-2">
          <LazyImage src="/images/alive.svg" alt="Alive App logo" />
        </div>
        <div className="text-base">
          <p className="mb-2 font-extrabold">Front-End Developer</p>
          <p>
            Alive App
            <span className="mx-2">▲</span>
            Apr 2022 - Dec 2022
          </p>
        </div>
      </div>      

      <h2 className="mt-8 headingTwo">Education</h2>
      <div className="flex flex-col items-start text-base">
        <p className="mb-2 font-extrabold">System Analysis</p>
        <p>
          Sao Paulo Federal Institute of Education, Science and Technology
          <span className="mx-2">▲</span>
          Aug 2022 - Aug 2025
        </p>
      </div>      
    </section>
  )
}

export default About
