import { type LoaderFunction } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'

import AnimatedBars from '@/components/molecules/AnimatedBars'
import { fetchCurrentPlaying } from '@/services/spotify.server'
import { cx } from '@/utils/classNames'

export const loader: LoaderFunction = async () =>
  await fetchCurrentPlaying()

const Karaoke = () => {
  const track = useLoaderData<typeof loader>()
  const { title, albumImageURL, isPlaying, artistName } = track

  return (
    <section className="flex flex-col items-center text-center">
      <div className="relative">
        {isPlaying ? <AnimatedBars /> : null}
        <img
          className={cx(
            'w-300 h-300 object-cover mix-blend-exclusion',
            isPlaying ? 'opacity-30' : null
          )}
          src={isPlaying ? albumImageURL : '/images/not_playing.jpg'}
          alt={title}
          title={title}
          loading="lazy"
        />
      </div>
      {isPlaying ?
        <p className="mt-4 text-base">
          ▲ by <span className="font-extrabold">{artistName}</span>
        </p>
      : null}

      <h1 className="text-4xl-mb md:text-4xl font-extrabold leading-tight">
        {isPlaying ? title : 'Not playing'}
      </h1>
    </section>
  )
}

export default Karaoke
