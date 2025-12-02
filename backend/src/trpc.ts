import { z } from 'zod'





import { initTRPC } from "@trpc/server"
const ideas = Array.from({ length: 100 }).map((_, i) => ({
  nick: `nice-idea-nice-${i + 1}`,
  name: `Idea ${i + 1}`,
  description: `Description for Idea ${i + 1}...`,
  text: Array.from({ length: 50 }, (_, j) => `<p>Text paragrph ${j} of idea ${i}...</p>`).join(''),
}))

const trpc = initTRPC.create()

export const trpcRouter = trpc.router({
  getIdeas: trpc.procedure.query(() => {
    return {
      ideas: ideas.map((idea) => ({
        nick: idea.nick,
        name: idea.name,
        description: idea.description,
      })),
    }
  }),
  getIdea: trpc.procedure.input(z.object({ nick: z.string() })).query(({ input }) => {
    const idea = ideas.find((idea) => idea.nick === input.nick)
    return { idea: idea || null }
  }),
})

 




        export type TrpcRouter = typeof trpcRouter
