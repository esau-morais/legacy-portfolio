import prisma from '@/utils/prisma'

const fetchProjectBySlug = async (slug: string) =>
  await prisma.project.findUnique({
    where: {
      slug
    }
  }) 

export { fetchProjectBySlug }
