import { trpc } from '../lib/trpc.js'

import { createIdeaTrpcRoute } from './createIdea/index.js'
import { getIdeaTrpcRoute } from './getIdea/index.js'
import { getIdeasTrpcRoute } from './getIdeas/index.js'

export const trpcRouter = trpc.router({
  getIdea: getIdeaTrpcRoute,
  getIdeas: getIdeasTrpcRoute,
  createIdea: createIdeaTrpcRoute,
})

export type TrpcRouter = typeof trpcRouter
