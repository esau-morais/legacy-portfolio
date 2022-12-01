import prisma from '@/utils/prisma'

export const fetchProjects = async () => {
  return await prisma.project.findMany({
    orderBy: {
      name: 'asc'
    }
  })
}
