import { trpc } from '../../lib/trpc.js'
import checkPasswordHash from '../../utils/checkPasswordHash.js'
import getPasswordHash from '../../utils/getPasswordHash.js'

import { zUpdatePasswordTrpcInput } from './input.js'

export const updatePasswordTrpcRoute = trpc.procedure
  .input(zUpdatePasswordTrpcInput)
  .mutation(async ({ ctx, input }) => {
    if (!ctx.me) {
      throw new Error('UNAUTHORIZED')
    }

    const isOldCorrect = await checkPasswordHash(input.oldPassword, ctx.me.password)

    if (!isOldCorrect) {
      throw new Error('Wrong old password')
    }
    const updatedMe = await ctx.prisma.user.update({
      where: {
        id: ctx.me.id,
      },
      data: {
        password: await getPasswordHash(input.newPassword),
      },
    })

    ctx.me = updatedMe

    return true
  })
