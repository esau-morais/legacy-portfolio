import { json, type LoaderFunction } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'

import type { IProject } from '@/lib/data'
import { fetchProjectBySlug } from '@/services/project.server'
import LazyImage from '@/components/atoms/LazyImage'

export const loader: LoaderFunction = async ({ params }) => {
  const project = await fetchProjectBySlug(params.slug ?? '')

  return json({
    id: project?.id.toString(),
    name: project?.name,
    description: project?.description,
    slug: project?.slug,
    cover_image: project?.cover_image,
    stack: project?.stack.map(technology => technology)
  })
}

const Project = () => {
  const project: IProject = useLoaderData<typeof loader>()

  return (
    <section>
      <LazyImage
        className="mix-blend-exclusion"
        src={project.cover_image}
        alt={project.name}
        height={40}
      />

      <ul className="mt-4 flex items-center space-x-2">
        {project.stack.map((technology, position) =>
          <>
            <li key={position}>{technology}</li>
            <span>{!project.stack[position - 1] ? '▲' : null}</span>
          </>
        )}
      </ul>

      <h1 className="text-4xl-mb md:text-4xl font-extrabold leading-tight">
        {project.name}
      </h1>

      <p>{project.description}</p>
    </section>
  )
}

export default Project
