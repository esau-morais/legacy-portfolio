import prisma from '@/utils/prisma'

export const fetchProjectBySlug = async (slug: string) =>
  await prisma.project.findUnique({
    where: {
      slug
    }
  }) 
