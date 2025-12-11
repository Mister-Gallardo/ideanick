import type { inferRouterInputs, inferRouterOutputs } from '@trpc/server'

import { trpc } from '../lib/trpc.js'

import { blockIdeaTrpcRoute } from './blockIdea/index.js'
import { createIdeaTrpcRoute } from './createIdea/index.js'
import { getIdeaTrpcRoute } from './getIdea/index.js'
import { getIdeasTrpcRoute } from './getIdeas/index.js'
import { getMeTrpcRoute } from './getMe/index.js'
import { setIdeaLikeTrpcRoute } from './setIdeaLike/index.js'
import { signInTrpcRoute } from './signIn/index.js'
import { signUpTrpcRoute } from './signUp/index.js'
import { updateIdeaTrpcRoute } from './updateIdea/index.js'
import { updatePasswordTrpcRoute } from './updatePassword/index.js'
import { updateProfileTrpcRoute } from './updateProfile/index.js'

export const trpcRouter = trpc.router({
  getIdea: getIdeaTrpcRoute,
  getIdeas: getIdeasTrpcRoute,
  createIdea: createIdeaTrpcRoute,
  signUp: signUpTrpcRoute,
  signIn: signInTrpcRoute,
  getMe: getMeTrpcRoute,
  updateIdea: updateIdeaTrpcRoute,
  updateProfile: updateProfileTrpcRoute,
  updatePassword: updatePasswordTrpcRoute,
  setIdeaLike: setIdeaLikeTrpcRoute,
  blockIdea: blockIdeaTrpcRoute,
})

export type TrpcRouter = typeof trpcRouter
export type TrpcRouterInput = inferRouterInputs<TrpcRouter>
export type TrpcRouterOutput = inferRouterOutputs<TrpcRouter>
