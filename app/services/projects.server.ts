import prisma from "@/utils/prisma"

const fetchProjects = async () => {
  return await prisma.project.findMany({
    orderBy: {
      name: 'asc'
    }
  })
}

export { fetchProjects }
