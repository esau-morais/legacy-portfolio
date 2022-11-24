import prisma from "@/utils/prisma"

const fetchProjects = async () => {
  return await prisma.projects.findMany({
    orderBy: {
      name: 'asc'
    }
  })
}

export { fetchProjects }
