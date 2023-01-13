import { useState, useEffect } from 'react'

import { Button, PlayIcon } from '@/components/atoms'
import LazyImage from '@/components/atoms/LazyImage'
import { cx } from '@/utils/classNames'

const Index = () => {
  const [pronunciation, setPronunciation] = useState<HTMLAudioElement | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    setPronunciation(new Audio('/audios/pronunciation.mp4'))
  }, [])

  useEffect(() => {
    if (!pronunciation) return

    pronunciation.addEventListener('ended', () => setIsPlaying(false))

    return () => {
      pronunciation.removeEventListener('ended', () => setIsPlaying(false))
    }
  }, [pronunciation])

  return (
    <section className="flex flex-col items-center">
      <div className='flex items-baseline'>
        <div className="mr-4 w-[128px] h-[128px]">
          <LazyImage
            className="grayscale rounded-t-full rounded-bl-full"
            src="/images/myself.jpg"
            alt="Myself"
          />
        </div>

        <p>Esaú Morais</p>
      </div>

      <div className="relative flex flex-col items-center md:items-start leading-tight mt-8">
        <span className="z-0 absolute -left-6 top-1/2 w-16 h-16 rounded-full blur-sm bg-gradient-to-r from-dark-blue via-blue to-light-blue scale-50 md:scale-100" />
        <h2 className="headingTwo font-normal tracking-wide-mb md:tracking-wide">
          Passionate
        </h2>
        <h1 className="z-10 headingOne">Developer</h1>
      </div>
    </section>
  )
}

export default Index
