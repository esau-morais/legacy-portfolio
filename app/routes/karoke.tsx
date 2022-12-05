import type { MetaFunction, LoaderFunction } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'

import LazyImage from '@/components/atoms/LazyImage'
import AnimatedBars from '@/components/molecules/AnimatedBars'
import { fetchCurrentPlaying } from '@/services/spotify.server'
import { cx } from '@/utils/classNames'

export const meta: MetaFunction = () => ({
  title: 'Listen with Me',
  description:
    "Get to know what I'm listening at Spotify in real-time",
})

export const loader: LoaderFunction = async () =>
  await fetchCurrentPlaying()

const Karaoke = () => {
  const track = useLoaderData<typeof loader>()
  const { title, albumImageURL, isPlaying, artistName } = track

  return (
    <section className="flex flex-col items-center text-center">
      <div className="w-300 h-300 relative">
        {isPlaying ? <AnimatedBars /> : null}
        <LazyImage
          className={cx(
            'mix-blend-exclusion',
            isPlaying ? 'opacity-30' : null
          )}
          src={isPlaying ? albumImageURL : '/images/not_playing.jpg'}
          alt={`${title}, by ${artistName}`}
          title={`${title}, by ${artistName}`}
        />
      </div>
      {isPlaying ?
        <p className="mt-4 text-base">
          ▲ by <span className="font-extrabold">{artistName}</span>
        </p>
      : null}

      <h1 className="headingOne leading-tight">
        {isPlaying ? title : 'Not playing'}
      </h1>
    </section>
  )
}

export default Karaoke
