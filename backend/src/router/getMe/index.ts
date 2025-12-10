import { toClientMe } from '../../lib/model.js'
import { trpc } from '../../lib/trpc.js'

export const getMeTrpcRoute = trpc.procedure.query(({ ctx }) => {
  return { me: toClientMe(ctx.me) }
})
