import { json, type MetaFunction, type LoaderFunction } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'

import { Redirect } from '@/components/atoms'
import LazyImage from '@/components/atoms/LazyImage'
import type { IProject } from '@/lib/data'
import { fetchProjectBySlug } from '@/services/project.server'

export const meta: MetaFunction = ({ data }) => {
  return {
    title: data.name,
    description: data.description,
    'og:image': data.cover_image
  }
}

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
      <div className="w-fit mb-2">
        <Redirect label="Projects" to="/projects" direction="west" size='md' />
      </div>

      <div className="w-full aspect-video">
        <LazyImage
          className="mix-blend-exclusion"
          src={project.cover_image}
          alt={project.name}
        />
      </div>

      <ul className="mt-4 flex items-center space-x-2 flex-wrap">
        {project.stack.map((technology, position) =>
          <>
            <li key={position}>{technology}</li>
            <span className="last:hidden">▲</span>
          </>
        )}
      </ul>

      <h1 className="headingOne">
        {project.name}
      </h1>

      <p
        className="text-base"
        dangerouslySetInnerHTML={{ __html: project.description }}
      />
    </section>
  )
}

export default Project
