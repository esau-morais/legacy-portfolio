import { type LoaderFunction, json, type MetaFunction } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'

import Card from '@/components/molecules/Card'
import { type IProject } from '@/lib/data'
import { fetchProjects } from '@/services/projects.server'

export const meta: MetaFunction = () => ({
  title: 'Projects',
  description:
    'Checkout some of my side projects',
})

export const loader: LoaderFunction = async () => {
  const projects = await fetchProjects()

  return json(
    projects.map(project => ({
      id: project.id.toString(), 
      name: project.name,
      slug: project.slug,
      cover_image: project.cover_image
    })
  ))
}


const Projects = () => {
  const projects: IProject[] = useLoaderData<typeof loader>()

  return (
    <section className="flex flex-col items-center">
      <h1 className="text-4xl-mb md:text-4xl font-extrabold">Projects</h1>

      <div className="gap-x-6 space-y-6 columns-1 md:columns-2 lg:columns-3">
        {projects?.map(project => <Card key={project.id} data={project} />)}
      </div>
    </section>
  )
}

export default Projects
