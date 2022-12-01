import type { ContactBook } from '@prisma/client'

export const dispatchContact = async (data: Pick<ContactBook, 'name' | 'email' | 'body'>) =>
  await prisma?.contactBook.create({ data })
