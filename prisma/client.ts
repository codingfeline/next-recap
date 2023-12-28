// import { PrismaClient } from '@prisma/client'

// const prisma = new PrismaClient()

// export default prisma

import { PrismaClient } from '@prisma/client'

const prismaClientSingleton = () => {
  return new PrismaClient()
}

declare global {
  var prisma: undefined | ReturnType<typeof prismaClientSingleton>
}

export const prisma = globalThis.prisma ?? prismaClientSingleton()

// export default prisma

if (process.env.NODE_ENV !== 'production') globalThis.prisma = prisma

// https://www.prisma.io/docs/orm/more/help-and-troubleshooting/help-articles/nextjs-prisma-client-dev-practices