import { trpc } from '../../lib/trpc.js'
import { canBlockIdeas } from '../../utils/can.js'

import { zBlockIdeaTrpcInput } from './input.js'

export const blockIdeaTrpcRoute = trpc.procedure
  .input(zBlockIdeaTrpcInput)
  .mutation(async ({ ctx, input }) => {
    const { ideaId } = input
    if (!canBlockIdeas(ctx.me)) {
      throw new Error('PERMISSION_DENIED')
    }
    const idea = await ctx.prisma.idea.findUnique({
      where: {
        id: ideaId,
      },
    })
    if (!idea) {
      throw new Error('NOT_FOUND')
    }
    await ctx.prisma.idea.update({
      where: {
        id: ideaId,
      },
      data: {
        blockedAt: new Date(),
      },
    })
    return true
  })
