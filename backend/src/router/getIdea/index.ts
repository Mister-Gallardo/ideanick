import { trpc } from '../../lib/trpc.js'

import { zGetIdeaTrpcInput } from './input.js'

export const getIdeaTrpcRoute = trpc.procedure
  .input(zGetIdeaTrpcInput)
  .query(async ({ ctx, input }) => {
    const rawIdea = await ctx.prisma.idea.findUnique({
      where: {
        nick: input.ideaNick,
      },
      include: {
        author: {
          select: {
            id: true,
            nick: true,
            name: true,
          },
        },
        ideasLikes: {
          select: {
            id: true,
          },
          where: {
            userId: ctx.me?.id,
          },
        },
        _count: {
          select: {
            ideasLikes: true,
          },
        },
      },
    })

    if (!rawIdea) {
      throw new Error('Idea not found')
    }

    const isLikedByMe = !!rawIdea?.ideasLikes.length
    const likesCount = rawIdea?._count.ideasLikes || 0
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { ideasLikes, _count, ...rest } = rawIdea
    const idea = {
      ...rest,
      isLikedByMe,
      likesCount,
    }

    return { idea }
  })
