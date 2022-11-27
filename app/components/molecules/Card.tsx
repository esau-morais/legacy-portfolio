import type { IProject } from '@/lib/data'

import { Redirect } from '../atoms'

const Card = ({ data }: { data: IProject }) => {
  return (
    <figure className="break-inside-avoid max-w-[290px] min-h-[272px] max-h-[426px] flex flex-col items-center">
      <img
        className="min-h-[inherit] object-cover"
        src={data.cover_image}
        alt={data.name}
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

