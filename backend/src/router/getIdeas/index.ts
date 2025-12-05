import { ideas } from '../../lib/ideas.js'
import { trpc } from '../../lib/trpc.js'

export const getIdeasTrpcRoute = trpc.procedure.query(() => {
  return {
    ideas: ideas.map((idea) => ({
      nick: idea.nick,
      name: idea.name,
      description: idea.description,
    })),
  }
})
