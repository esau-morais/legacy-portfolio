import type { IProject } from '@/lib/data'

import { Redirect } from '../atoms'
import LazyImage from '../atoms/LazyImage'

const Card = ({ data }: { data: IProject }) => {
  return (
    <figure className="break-inside-avoid max-w-[290px] min-h-[272px] max-h-[426px] flex flex-col items-center">
      <LazyImage
        className="min-h-[inherit]"
        src={data.cover_image}
        alt={data.name}
        height={41}
      />

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

