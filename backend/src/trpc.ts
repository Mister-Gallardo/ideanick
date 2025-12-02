import { initTRPC } from '@trpc/server'

const ideas = [
  { nick: 'nice-edia-nice-1', name: 'Idea 1', description: 'Description for Idea 1...' },
  { nick: 'nice-edia-nice-2', name: 'Idea 2', description: 'Description for Idea 2...' },
  { nick: 'nice-edia-nice-3', name: 'Idea 3', description: 'Description for Idea 3...' },
  { nick: 'nice-edia-nice-4', name: 'Idea 4', description: 'Description for Idea 4...' },
  { nick: 'nice-edia-nice-5', name: 'Idea 5', description: 'Description for Idea 5...' },
]

const trpc = initTRPC.create()

export const trpcRouter = trpc.router({
  getIdeas: trpc.procedure.query(() => {
    return { ideas }
  }),
})

export type TrpcRouter = typeof trpcRouter
