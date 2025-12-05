import { ideas } from '../../lib/ideas.js'
import { trpc } from '../../lib/trpc.js'

import { zCreateIdeaTrpcInput } from './input.js'

export const createIdeaTrpcRoute = trpc.procedure
  .input(zCreateIdeaTrpcInput)
  .mutation(({ input }) => {
    if (!ideas.some((idea) => idea.name === input.name)) {
      ideas.unshift(input)
      return true
    } else {
      throw Error('Idea with this nick already exists')
    }
  })
