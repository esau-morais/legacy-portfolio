import type { IProject } from '@/lib/data'

import { Redirect } from '../atoms'
import LazyImage from '../atoms/LazyImage'

const Card = ({ data }: { data: IProject }) => {
  return (
    <figure className="break-inside-avoid min-w-[290px] min-h-auto max-h-[426px] flex flex-col items-center odd:aspect-video even:aspect-[9/16]">
      <LazyImage src={data.cover_image} alt={data.name} />

      <figcaption className="w-full bg-light text-dark p-4">
        <Redirect
          label={data.name}
          to={`/project/${data.slug}`}
          direction="northeast"
          prefetch="render"
        />
      </figcaption>
    </figure>
  )
}

export default Card

