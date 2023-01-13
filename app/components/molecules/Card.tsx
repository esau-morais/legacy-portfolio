import type { IProject } from '@/lib/data'
import { motion } from 'framer-motion'

import { Redirect } from '../atoms'
import LazyImage from '../atoms/LazyImage'

const Card = ({ data }: { data: IProject }) => {
  return (
    <motion.figure
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="break-inside-avoid min-w-full min-h-auto max-h-[426px] flex flex-col items-center odd:aspect-video even:aspect-[9/16]"
    >
      <LazyImage className="rounded-t-lg" src={data.cover_image} alt={data.name} />

      <figcaption className="w-full bg-light text-dark p-4">
        <Redirect
          label={data.name}
          to={`/project/${data.slug}`}
          direction="northeast"
          prefetch="render"
        />
      </figcaption>
    </motion.figure>
  )
}

export default Card

