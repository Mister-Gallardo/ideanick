import { prisma } from './prisma.js'

export const createAppContext = () => ({
  prisma,
  stop: async () => await prisma.$disconnect(),
})

export type AppContext = ReturnType<typeof createAppContext>
