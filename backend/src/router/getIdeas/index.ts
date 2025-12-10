import { trpc } from '../../lib/trpc.js'

import { zGetIdeasTrpcInput } from './input.js'

export const getIdeasTrpcRoute = trpc.procedure
  .input(zGetIdeasTrpcInput)
  .query(async ({ ctx, input }) => {
    // const normalizedSearch = input.search
    //   ? input.search.trim().replace(/[\s\n\t]/g, ' & ')
    //   : undefined
    const normalizedSearch = input.search?.trim() || undefined
    const rawIdeas = await ctx.prisma.idea.findMany({
      select: {
        id: true,
        nick: true,
        name: true,
        description: true,
        serialNumber: true,
        _count: {
          select: {
            ideasLikes: true,
          },
        },
      },
      where: !input.search
        ? undefined
        : {
            OR: [
              {
                name: {
                  // search - более мощный и быстрый инструмент,
                  // но принимающий в качестве normalizedSearch строку не менее 3х символов.
                  // слова до 3х символов просто не будут обработаны и вернётся пустой результат
                  // search: normalizedSearch,
                  contains: normalizedSearch,
                  mode: 'insensitive',
                },
              },
              {
                description: {
                  contains: normalizedSearch,
                  mode: 'insensitive',
                },
              },
              {
                text: {
                  contains: normalizedSearch,
                  mode: 'insensitive',
                },
              },
            ],
          },
      orderBy: [
        {
          createdAt: 'desc',
        },
        {
          serialNumber: 'desc',
        },
      ],
      cursor: input.cursor ? { serialNumber: input.cursor } : undefined,
      take: input.limit + 1,
    })

    console.log('1' + normalizedSearch + '1')
    console.log(rawIdeas)

    const nextIdea = rawIdeas.at(input.limit)
    const nextCursor = nextIdea?.serialNumber
    const rawIdeasExceptNext = rawIdeas.slice(0, input.limit)
    const ideasExceptNext = rawIdeasExceptNext.map(({ _count, ...idea }) => ({
      ...idea,
      likesCount: _count.ideasLikes,
    }))

    return { ideas: ideasExceptNext, nextCursor }
  })
