import { trpc } from '../../lib/trpc.js'
import checkPasswordHash from '../../utils/checkPasswordHash.js'
import { signJWT } from '../../utils/signJWT.js'

import { zSignInTrpcInput } from './input.js'

export const signInTrpcRoute = trpc.procedure
  .input(zSignInTrpcInput)
  .mutation(async ({ ctx, input }) => {
    const user = await ctx.prisma.user.findUnique({
      where: { nick: input.nick },
    })

    const isValid = await checkPasswordHash(input.password, user?.password || '')

    if (!isValid || !user) {
      throw new Error('Wrong nick or password')
    }

    const token = signJWT(user.id)

    return { token }
  })
